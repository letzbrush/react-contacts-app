import React, { ReactNode } from 'react'
import { Col, Layout, Row } from 'antd'

import styles from './PageContent.module.less'

const { Content } = Layout

interface PageContentProps {
  children: ReactNode
}

const PageContent = ({ children }: PageContentProps) => {
  return (
    <Content className={styles.content}>
      <Row align='middle' className={styles.mainRow}>
        <Col span={24}>
          {children}
        </Col>
      </Row>
    </Content>
  )
}

export default PageContent
