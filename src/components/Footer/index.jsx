import React from 'react'
import Link from 'gatsby-link'
import { Layout } from 'antd'

import styles from "./index.module.css"

const { Footer } = Layout

const MainFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Footer className={styles.footer}>
      <p>Made in London with React, GraphQL and AWS Serverless.</p>
      <p className={styles.copy}>
        { `Copyright © 2005 - ${currentYear} ` }
        <Link to="/">{ `David Brookes` }</Link>
      </p>
    </Footer>
  )
}

export default MainFooter
