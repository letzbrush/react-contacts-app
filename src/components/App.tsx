import React from 'react'
import { Layout } from 'antd'

import styles from './App.module.less'

const { Header, Content, Footer } = Layout

function App() {
  return (
    <Layout className={styles.layout}>
      <Header>Header</Header>
      <Content>
        Content
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default App;
