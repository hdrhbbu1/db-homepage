import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import PageMeta from "../components/PageMeta"
import SectionHeader from "../components/SectionHeader"

const ProjectDetailTemplate = ({ data }) => {
  const post = data.project

  return (
    <section>
      <PageMeta page={post.frontmatter} />

      <SectionHeader
        headingCopy={post.frontmatter.title}
        type="h1"
        taglineCopy={post.frontmatter.type || `Web development project.`}
      />

      <div style={{ width: `70%`, float: `left` }}>
        <div style={{ padding: `5px`, border: `2px solid #f8f8f8` }}>
          <Img sizes={post.frontmatter.full.childImageSharp.sizes} />
        </div>
      </div>
      <div style={{ width: `25%`, float: `right` }}>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <div>
          <h3>Technology</h3>
          <ul>
            { post.frontmatter.technology.map(tech => (
              <li key={tech}>{tech}</li>
              )) }
          </ul>
        </div>

        <div style={{ marginTop: `30px` }}>
          <ul>
            {post.frontmatter.agency &&
            <li><strong>Agency:</strong> {post.frontmatter.agency}</li>
              }
            {post.frontmatter.client &&
            <li><strong>Client:</strong> {post.frontmatter.client}</li>
              }
            { post.frontmatter.link &&
            <li>
              <strong>Link: </strong>
              <a href={post.frontmatter.link} target="_blank" rel="noopener noreferrer">
                {post.frontmatter.link}
              </a>
            </li>
              }
          </ul>
        </div>

      </div>
    </section>
  )
}

ProjectDetailTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
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
        type
        agency
        client
        link
        full {
          childImageSharp {
            sizes(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpSizes_withWebp_tracedSVG
            }
          }
        }

      }
    }

  }
`
