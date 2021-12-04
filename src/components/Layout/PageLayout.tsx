import React, { ReactNode } from 'react'
import { Layout } from 'antd'

import styles from './PageLayout.module.less'

interface PageLayoutProps {
  children: ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Layout className={styles.layout}>
      {children}
    </Layout>
  )
}

export default PageLayout
