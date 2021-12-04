import React, { ReactNode } from 'react'
import { Col, Layout, Row } from 'antd'

const { Content } = Layout

interface PageContentProps {
  children: ReactNode
}

const PageContent = ({ children }: PageContentProps) => {
  return (
    <Content>
      <Row align='middle'>
        <Col span={22} offset={1}>
          {children}
        </Col>
      </Row>
    </Content>
  )
}

export default PageContent
