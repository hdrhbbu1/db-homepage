import React from "react"
import Link from "gatsby-link"

import styles from "./index.module.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <p>Made in London with React, GraphQL and AWS Serverless.</p>
      <p className={styles.copy}>
        {`Copyright © 2005 - ${currentYear} `}
        <Link to="/"><strong>David Brookes</strong></Link>
      </p>
    </footer>
  )
}

export default Footer
