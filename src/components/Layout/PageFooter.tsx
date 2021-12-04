import React from 'react'
import { Layout } from 'antd'

import styles from './PageFooter.module.less'

const { Footer } = Layout

const PageFooter = () => {
  return (
    <Footer className={styles.footer}>
      Created by Matthias Meier
    </Footer>
  )
}

export default PageFooter
