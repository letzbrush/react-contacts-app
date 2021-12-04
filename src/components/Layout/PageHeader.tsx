import React, { ReactNode } from 'react'
import { Col, Layout, Row, Typography } from 'antd'

import styles from './PageHeader.module.less'

const { Header } = Layout
const { Title } = Typography

interface PageHeaderProps {
  children: ReactNode
  title?: string
}

const PageHeader = ({
  children,
  title = 'Contacts',
}: PageHeaderProps) => {
  return (
    <Header>
      <Row align='middle' justify="space-between" className={styles.mainRow}>
        <Col flex='auto'>
          <Title>{title}</Title>
        </Col>
        <Col flex='none'>
          {children}
        </Col>
      </Row>
    </Header>
  )
}

export default PageHeader
