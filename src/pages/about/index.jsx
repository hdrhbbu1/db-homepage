import React from "react"
import get from "lodash/get"

import { Row, Col } from 'antd'
import PageMeta from "../../components/PageMeta"
import SectionHeader from "../../components/SectionHeader"
import Testimonial from "../../components/TestimonialCard"
import ClientCard from "../../components/ClientCard/index"
import BioCard from "../../components/BioCard/index"

class About extends React.Component {
  render() {
    const post = this.props.data.page
    const allTestimonials = get(this, `props.data.allTestimonials.edges`)
    const allClients = get(this, `props.data.allClients.edges`)

    return (
      <section>
        <PageMeta page={post.frontmatter} />
        <SectionHeader
          headingCopy="About"
          type="h1"
          taglineCopy="A little more about me."
        />

        <BioCard avatar={post.frontmatter.avatar} col1={post.html} />

        <SectionHeader
          headingCopy="Testimonails"
          type="h2"
          taglineCopy="What clients say."
        />

        <Row gutter={30} type="flex">
          {allTestimonials.map(testimonial => (
            <Col key={testimonial.node.id} xs={24} sm={12} md={8}>
              <Testimonial post={testimonial} />
            </Col>
          ))}
        </Row>

        <SectionHeader
          headingCopy="Clients"
          type="h2"
          taglineCopy="Brands and organisations I've produced work for."
        />

        <Row gutter={30} type="flex">
          {allClients.map(client => (
            <Col key={client.node.id} xs={24} sm={12} md={6}>
              <ClientCard client={client.node.frontmatter} />
            </Col>
          ))}
        </Row>

      </section>
    )
  }
}

export default About

export const pageQuery = graphql`
  query AboutPage($path: String!) {

    page: markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        path
        metaTitle
        avatar {
          childImageSharp {
            responsiveResolution {
              base64
              aspectRatio
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }

    allTestimonials: allMarkdownRemark(limit: 6, filter: {frontmatter: {type: {eq: "testimonial"}, draft: {ne: true}}}) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            jobTitle
            thumb {
              childImageSharp {
                responsiveResolution {
                  base64
                  aspectRatio
                  width
                  height
                  src
                  srcSet
                }
              }
            }
            linkedIn
            twitter
          }
        }
      }
    }

    allClients: allMarkdownRemark(limit: 16, filter: {frontmatter: {type: {eq: "clients"}, draft: {ne: true}}}) {
      edges {
        node {
          id
          frontmatter {
            title
            logo
          }
        }
      }
    }

  }
`
