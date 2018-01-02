import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Icon from "@fortawesome/react-fontawesome"

import PageMeta from "../../components/PageMeta"
import SectionHeader from "../../components/SectionHeader"
import ContactForm from "../../components/ContactForm"

const Contact = ({ data }) => {
  const post = data.page

  return (
    <section>
      <PageMeta page={post.frontmatter} />

      <SectionHeader headingCopy={post.frontmatter.title} type="h1" taglineCopy={post.frontmatter.tagline} />

      <ContactForm />

      <SectionHeader
        smallHeader
        smallLead
        headingCopy="Connect"
        type="h2"
        taglineCopy="Other places to find me."
      />

      <p style={{ textAlign: `center` }}>
        <a style={{ color: `#2b2b2d` }} href="https://github.com/dbrookes" target="_blank" rel="noopener noreferrer">
          <Icon icon={[`fab`, `github`]} size="3x" fixedWidth />
        </a>
        <a style={{ color: `#2b2b2d` }} href="https://linkedin.com/in/dbrookes" target="_blank" rel="noopener noreferrer">
          <Icon icon={[`fab`, `linkedin`]} size="3x" fixedWidth />
        </a>
        <a style={{ color: `#2b2b2d` }} href="https://angel.co/dbrookes" target="_blank" rel="noopener noreferrer">
          <Icon icon={[`fab`, `angellist`]} size="3x" fixedWidth />
        </a>
        <a style={{ color: `#2b2b2d` }} href="https://twitter.com/_dbrookes" target="_blank" rel="noopener noreferrer">
          <Icon icon={[`fab`, `twitter`]} size="3x" fixedWidth />
        </a>
      </p>

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

export default Contact

Contact.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query ContactPage($path: String!) {
    page: markdownRemark(frontmatter: { path: { eq: $path } }) {
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
