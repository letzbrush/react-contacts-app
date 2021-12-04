import React from 'react'
import { List, Avatar } from 'antd'

import { Contact } from '../types/Contact'
import PageContent from './Layout/PageContent'

interface ContactsListProps {
  contacts: Contact[]
}

const ContactsList = ({ contacts }: ContactsListProps) => {
  return (
    <PageContent>
      <List
        itemLayout="horizontal"
        dataSource={contacts}
        renderItem={contact => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={contact.avatarUrl} size='large'/>}
              title={contact.name}
              description={contact.company.catchPhrase}
            />
          </List.Item>
        )}
      />
    </PageContent>
  )
}

export default ContactsList
