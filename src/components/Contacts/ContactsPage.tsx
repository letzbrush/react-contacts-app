import React, { useCallback, useEffect, useMemo } from 'react'

import { useAppDispatch } from '../../store/storeHooks'
import { useContactsState } from '../../store/storeFacade'
import { fetchContacts } from '../../store/contacts/effects'
import { toggleSorting, toggleView } from '../../store/contacts/reducer'
import Layout from '../Layout'
import ContactsGrid from './ContactsGrid'
import ContactsList from './ContactsList'
import ToggleViewButton from './ToggleViewButton'
import ToggleSortButton from './ToggleSortButton'
import { ViewType } from '../../types/ViewType'
import { Space } from 'antd'
import { SortType } from '../../types/SortType'
import { Contact } from '../../types/Contact'

const sortContacts = (contacts: Contact[], type: SortType) => {
  const compareFn = type === SortType.ASCENDING
    ? (c1: Contact, c2: Contact) => c1.name > c2.name ? 1 : -1
    : (c1: Contact, c2: Contact) => c1.name < c2.name ? 1 : -1
  return [...contacts].sort(compareFn)
}

const ContactsPage = () => {
  const dispatch = useAppDispatch()
  const {
    contacts,
    currentView,
    currentSorting,
  } = useContactsState()

  const contactsSorted = useMemo(() => (
    sortContacts(contacts, currentSorting)
  ), [contacts, currentSorting])

  useEffect(() => {
    // todo: this condition can be removed if the delete & save endpoints actually work (unlike JsonPlaceholders)
    if (!contacts.length) {
      fetchContacts()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleContactsView = useCallback(() => {
    dispatch(toggleView())
  }, [dispatch])

  const toggleContactsSorting = useCallback(() => {
    dispatch(toggleSorting())
  }, [dispatch])

  return (
    <Layout>
      <Layout.Header>
        <Space size='large'>
          <ToggleSortButton
            currentSortType={currentSorting}
            onClick={toggleContactsSorting}
          />
          <ToggleViewButton
            currentViewType={currentView}
            onClick={toggleContactsView}
          />
        </Space>
      </Layout.Header>
      <Layout.Content>
        {
          currentView === ViewType.GRID
            ? (<ContactsGrid contacts={contactsSorted}/>)
            : (<ContactsList contacts={contactsSorted}/>)
        }
      </Layout.Content>
      <Layout.Footer/>
    </Layout>
  )
}

export default ContactsPage
