import React from 'react'
import { Row, Col } from 'antd'

import { Contact } from '../types/Contact'
import ContactDetailCard from './ContactDetailCard'
import ContactsGridLoading from './ContactsGridLoading'

interface ContactsGridProps {
  contacts: Contact[]
}

const ContactsGrid = ({ contacts }: ContactsGridProps) => {
  if (!contacts.length) {
    return (<ContactsGridLoading/>)
  }

  return (
    <Row gutter={[32, 32]}>
      {
        contacts.map(contact => (
          <Col
            key={contact.id}
            span={6}
          >
            <ContactDetailCard
              contactDetail={contact}
              isLoading={!contact}
            />
          </Col>
        ))
      }
    </Row>
  )
}

export default ContactsGrid
