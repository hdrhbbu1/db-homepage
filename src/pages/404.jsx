import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import SectionHeader from "../components/SectionHeader"

export default class OhNoFourOhFour extends Component {
  render() {
    return (
      <section>
        <Helmet>
          <title>Page Not Found - Error 404</title>
        </Helmet>
        <SectionHeader
          headingCopy="Page Not Found"
          type="h2"
          taglineCopy="Error 404."
        />
        <p style={{ textAlign: `center` }}>
          <Link to="/">
            Home
          </Link>
        </p>
      </section>
    )
  }
}
