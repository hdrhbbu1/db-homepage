import React from "react"
import Helmet from "react-helmet"
import { Row, Col } from 'antd'

import PageMeta from "../../components/PageMeta"
import SectionHeader from "../../components/SectionHeader"
import ContactForm from "../../components/ContactForm"

class Contact extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    return (
      <section>
        <PageMeta page={post.frontmatter} />

        <SectionHeader headingCopy={post.frontmatter.title} type="h1" taglineCopy={post.frontmatter.tagline} />

        <Row gutter={30} type="flex">
          <Col xs={24} md={{ span: 14, offset: 5 }}>
            <ContactForm />
          </Col>
        </Row>

        <SectionHeader
          smallHeader
          smallLead
          headingCopy="Connect"
          type="h2"
          taglineCopy="Other places to find me."
        />

        <Helmet
          script={[{
            type: `application/ld+json`,
            innerHTML: `{
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "David Brookes",
              "url": "https://davidbrookes.co.uk",
              "sameAs" : [
                "https://www.linkedin.com/in/dbrookes",
                "https://github.com/dbrookes",
                "https://twitter.com/_dbrookes",
                "http://dribbble.com/dbrookes"
              ]
            }`,
          }]}
        />

      </section>
    )
  }
}

export default Contact

export const pageQuery = graphql`
  query ContactPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        path
        metaTitle
        metaDescription
        tagline
      }
    }
  }
`
