import React from 'react'
import { Link } from 'react-router-dom'
import { List, Avatar } from 'antd'

import { Contact } from '../types/Contact'
import { appConfig } from '../appConfig'

interface ContactsListProps {
  contacts: Contact[]
}

const ContactsList = ({ contacts }: ContactsListProps) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={contacts}
      renderItem={contact => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={contact.avatarUrl} size='large'/>}
            title={
              <Link to={appConfig.navRoutes.contactDetail(contact.id)}>
                {contact.name}
              </Link>
            }
            description={contact.company.catchPhrase}
          />
        </List.Item>
      )}
    />
  )
}

export default ContactsList
