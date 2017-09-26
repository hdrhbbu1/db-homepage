import React from 'react'
import Link from 'gatsby-link'
import { Layout } from 'antd'

import styles from "./index.module.css"

const { Footer } = Layout

class MainFooter extends React.Component {
  render() {
    const currentYear = new Date().getFullYear()

    return (
      <Footer className={styles.footer + (this.props.collapsed ? `` : ` ${styles.collapsed}`)}>
        <p>Made in London with React, GraphQL and AWS Serverless.</p>
        <p className={styles.copy}>
          {`Copyright © 2005 - ${currentYear} `}
          <Link to="/">{`David Brookes`}</Link>
        </p>
      </Footer>
    )
  }
}

export default MainFooter
