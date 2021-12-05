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
    fetchContacts()
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
