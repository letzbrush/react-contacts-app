import React, { useEffect } from 'react'

import Layout from './Layout'
import { useContactsState } from '../store/storeFacade'
import { fetchContacts } from '../store/contacts/effects'
import ContactsList from './ContactsList'
import { Button } from 'antd'

const ContactsPage = () => {
  const { contacts } = useContactsState()

  useEffect(() => {
    fetchContacts()
  }, [])

  return (
    <Layout>
      <Layout.Header>
        <Button>Grid/List</Button>
      </Layout.Header>
      <Layout.Content>
        <ContactsList contacts={contacts}/>
      </Layout.Content>
      <Layout.Footer/>
    </Layout>
  )
}

export default ContactsPage
