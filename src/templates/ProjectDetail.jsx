import React from "react"
import PropTypes from "prop-types"
import { Row, Col, Card } from "antd"

import PageMeta from "../components/PageMeta"
import SectionHeader from "../components/SectionHeader"

const ProjectDetailTemplate = ({ data }) => {
  const post = data.project

  return (
    <section>
      <PageMeta page={post.frontmatter} />

      <Row gutter={30}>
        <Col xs={24}>
          <SectionHeader
            headingCopy={post.frontmatter.title}
            type="h1"
            taglineCopy="Web development project."
          />
        </Col>
      </Row>

      <Row gutter={30}>
        <Col xs={24} md={17}>
          <Card bodyStyle={{ padding: `5px` }}>
            projet image
          </Card>
        </Col>
        <Col xs={24} md={7}>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />

          <Card>
            <h3>Technology</h3>
            <ul>
              { post.frontmatter.technology.map(tech => (
                <li key={tech}>{tech}</li>
              )) }
            </ul>
          </Card>

          <Card style={{ marginTop: `30px` }}>
            <ul>
              { post.frontmatter.agency && <li>Agency: {post.frontmatter.agency}</li> }
              { post.frontmatter.client && <li>Client: {post.frontmatter.client}</li> }
              { post.frontmatter.link &&
                <li>
                  <strong>Link: </strong>
                  <a href="{post.frontmatter.link}" target="_blank" rel="noopener noreferrer">
                    {post.frontmatter.link}
                  </a>
                </li>
              }
            </ul>
          </Card>

        </Col>
      </Row>

    </section>
  )
}

ProjectDetailTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default ProjectDetailTemplate

export const pageQuery = graphql`
  query ProjectsByPath($path: String!) {

    project: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        metaTitle
        metaDescription
        excerpt
        technology
        agency
        client
        link
        full {
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

  }
`
