import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"
import { Row, Col } from 'antd'

import PageMeta from "../components/PageMeta"
import Intro from '../components/Intro'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import ClientCard from '../components/ClientCard/index'
import TestimonialCard from '../components/TestimonialCard'

class Homepage extends React.Component {
  render() {
    const post = this.props.data.page

    const featuredProjects = get(this, `props.data.featuredProjects.edges`)
    const featuredTestimonials = get(this, `props.data.featuredTestimonials.edges`)
    const featuredClients = get(this, `props.data.featuredClients.edges`)

    return (
      <section>
        <PageMeta page={post.frontmatter} />
        <Intro title={post.frontmatter.title} intro={post.frontmatter.intro} />

        <Row gutter={30}>
          <Col xs={24}>
            <SectionHeader
              headingCopy="Featured Projects"
              type="h2"
              taglineCopy="Selected website and application builds."
            />
          </Col>
        </Row>

        <Row gutter={30} type="flex">
          {featuredProjects.map((project, index) => (
            <Col key={project.node.id} xs={24} sm={12} md={8} lg={8} xl={8}>
              <ProjectCard project={project} index={index} />
            </Col>
          ))}
        </Row>

        <Link to="/projects/">More Projects</Link>

        <div>
          <Row gutter={30}>
            <Col xs={24}>
              <SectionHeader
                headingCopy="Services"
                type="h2"
                taglineCopy="Companies hire me to build cutting-edge web experiences for big-name clients."
              />
            </Col>
          </Row>

          <Row gutter={30}>
            <Col xs={24} sm={12}>
              <Row gutter={30}>
                <Col xs={24} sm={12}>
                  <h3>Key Services & Skills</h3>
                  <ul>
                    {post.frontmatter.servicesPrimary.map(skill => (
                      <li key={skill}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Col>

                <Col xs={24} sm={12}>
                  <ul>
                    {post.frontmatter.servicesSecondary.map(skill => (
                      <li key={skill}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Col>

            <Col xs={24} sm={12}>
              <h3>Web Development</h3>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Col>
          </Row>
        </div>

        <Row gutter={30}>
          <Col xs={24}>
            <SectionHeader
              headingCopy="Testimonials"
              type="h2"
              taglineCopy="What clients say."
            />
          </Col>
        </Row>

        <Row gutter={30} type="flex">
          {featuredTestimonials.map((testimonial, index) => (
            <Col key={testimonial.node.id} xs={24} sm={12} md={8}>
              <TestimonialCard post={testimonial} index={index} />
            </Col>
          ))}
        </Row>

        <Row gutter={30}>
          <Col xs={24}>
            <SectionHeader
              headingCopy="Clients"
              type="h2"
              taglineCopy="Brands and organisations I've produced work for."
            />
          </Col>
        </Row>

        <Row gutter={30} type="flex">
          {featuredClients.map(client => (
            <Col key={client.node.id} xs={24} sm={12} md={6}>
              <ClientCard client={client.node.frontmatter} />
            </Col>
          ))}
        </Row>

      </section>
    )
  }
}

export default Homepage

export const pageQuery = graphql`
  query Homepage($path: String!) {

    page: markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        path
        metaTitle
        metaDescription
        intro
        servicesPrimary
        servicesSecondary
      }
    }

    featuredProjects: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 3, filter: {frontmatter: {path: {regex: "^/projects/"}, featured: {eq: true}, draft: {ne: true}}}) {
      edges {
        node {
          id
          frontmatter {
            path
            featured
            title
            excerpt
            thumb {
              childImageSharp {
                sizes(maxWidth: 500, maxHeight: 320) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                }
              }
            }
          }
        }
      }
    }

    featuredTestimonials: allMarkdownRemark(limit: 3, filter: {frontmatter: {type: {eq: "testimonial"}, featured: {eq: true}, draft: {ne: true}}}) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            jobTitle
            thumb {
              childImageSharp {
                resolutions(width: 90, height: 90) {
                  ...GatsbyImageSharpResolutions_withWebp_tracedSVG
                }
              }
            }
            linkedIn
            twitter
          }
        }
      }
    }

    featuredClients: allMarkdownRemark(limit: 4, filter: {frontmatter: {type: {eq: "clients"}, featured: {eq: true}, draft: {ne: true}}}) {
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
