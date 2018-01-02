import React from "react"
import PropTypes from "prop-types"
import Grid from "react-css-grid"

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

      <Grid width={420} gap={30}>
        {allProjects.map(project => (
          <div key={project.node.id} style={{ display: `flex` }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </Grid>
    </section>
  )
}

export default ProjectsPage

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired,
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
              sizes(maxWidth: 500, maxHeight: 360, quality: 80) {
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
