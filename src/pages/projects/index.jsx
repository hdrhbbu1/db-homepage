import React from "react"
import PropTypes from "prop-types"
import { Row, Col } from "antd"

import PageMeta from "../../components/PageMeta"
import SectionHeader from "../../components/SectionHeader"
import ProjectCard from "../../components/ProjectCard"

const ProjectsPage = ({ data }) => {
  const post = data.page
  const allProjects = data.allProjects.edges

  return (
    <section>
      <PageMeta page={post.frontmatter} />

      <SectionHeader
        headingCopy={post.frontmatter.title}
        type="h1"
        taglineCopy={post.frontmatter.tagline}
      />

      <Row gutter={30} type="flex">
        {allProjects.map(project => (
          <Col key={project.node.id} xs={24} sm={12} md={8}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default ProjectsPage

ProjectsPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
}

export const pageQuery = graphql`
query ProjectsPage($path: String!) {
  page: markdownRemark(frontmatter: { path: { eq: $path } }) {
    id
    html
    frontmatter {
      title
      tagline
      path
      metaTitle
      metaDescription
    }
  }

  allProjects: allMarkdownRemark (
    sort: { fields: [frontmatter___date], order: DESC }
    limit: 24,
    filter: {
      frontmatter: {
        path: { regex: "/\/projects\/[a-z]/u" },
        draft: { ne: true }
      }
    }
  )

  {
    edges {
      node {
        id
        frontmatter {
          path
          featured
          excerpt
          title
          thumb {
            childImageSharp {
              sizes(maxWidth: 500, maxHeight: 320) {
                ...GatsbyImageSharpSizes_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
}
`
