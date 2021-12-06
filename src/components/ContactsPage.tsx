import React, { useCallback, useEffect } from 'react'

import { useAppDispatch } from '../store/storeHooks'
import { useContactsState } from '../store/storeFacade'
import { fetchContacts } from '../store/contacts/effects'
import { toggleView } from '../store/contacts/reducer'
import Layout from './Layout'
import ContactsGrid from './ContactsGrid'
import ContactsList from './ContactsList'
import ToggleViewButton from './ToggleViewButton'
import { ViewType } from '../types/ViewType'

const ContactsPage = () => {
  const dispatch = useAppDispatch()
  const {
    contacts,
    currentView,
  } = useContactsState()

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

  return (
    <Layout>
      <Layout.Header>
        <ToggleViewButton
          currentViewType={currentView}
          onClick={toggleContactsView}
        />
      </Layout.Header>
      <Layout.Content>
        {
          currentView === ViewType.GRID
            ? (<ContactsGrid contacts={contacts}/>)
            : (<ContactsList contacts={contacts}/>)
        }
      </Layout.Content>
      <Layout.Footer/>
    </Layout>
  )
}

export default ContactsPage
