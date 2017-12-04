import React from "react"
import get from "lodash/get"
import { Row, Col } from "antd"

import PageMeta from "../../components/PageMeta"
import SectionHeader from "../../components/SectionHeader"
import ServiceCard from "../../components/ServiceCard"

class Services extends React.Component {
  render() {
    const post = this.props.data.page
    const allServices = get(this, `props.data.allServices.edges`)

    return (
      <section>
        <PageMeta page={post.frontmatter} />

        <SectionHeader
          headingCopy={post.frontmatter.title}
          type="h1"
          taglineCopy={post.frontmatter.tagline}
        />

        <Row gutter={30} type="flex">
          {allServices.map(service => (
            <Col key={service.node.id} xs={24} md={12} lg={8}>
              <ServiceCard post={service} />
            </Col>
          ))}
        </Row>

      </section>
    )
  }
}

export default Services

export const pageQuery = graphql`
  query ServicesPage($path: String!) {

    page: markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        path
        metaTitle
        metaDescription
        tagline
      }
    }

    allServices: allMarkdownRemark(limit: 12, sort: { fields: [frontmatter___order], order: ASC }, filter: {frontmatter: {type: {eq: "service"}, draft: {ne: true}}}) {
      edges {
        node {
          html
          id
          frontmatter {
            title
            icon
          }
        }
      }
    }
  }
`
