import React from 'react'
import { Row, Col } from 'antd'

import ContactCard from './ContactCard'

const GRID_LOADING_COUNT = 12

const ContactsGridLoading = () => {
  const gridArray = Array.from(Array(GRID_LOADING_COUNT).keys())
  return (
    <Row gutter={[32, 32]}>
      {
        gridArray.map((entry) => (
          <Col
            key={entry}
            span={6}
          >
            <ContactCard isLoading={true}/>
          </Col>
        ))
      }
    </Row>
  )
}

export default ContactsGridLoading
