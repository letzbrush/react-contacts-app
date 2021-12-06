import React from 'react'
import { Row, Col } from 'antd'

import { Contact } from '../../types/Contact'
import ContactCard from './ContactCard'
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
            xs={24}
            sm={12}
            xl={6}
          >
            <ContactCard
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
