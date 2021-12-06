import React from 'react'
import { List } from 'antd'

import { Contact } from '../../types/Contact'
import ContactsListEntry from './ContactsListEntry'

interface ContactsListProps {
  contacts: Contact[]
}

const ContactsList = ({ contacts }: ContactsListProps) => {
  return (
    <List
      itemLayout='horizontal'
      dataSource={contacts}
      renderItem={contact => (
        <ContactsListEntry contactDetail={contact} isLoading={!contact}/>
      )}
    />
  )
}

export default ContactsList
