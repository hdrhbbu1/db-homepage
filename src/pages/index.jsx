import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Grid from "react-css-grid"
import Icon from "@fortawesome/react-fontawesome"

import PageMeta from "../components/PageMeta"
import Intro from "../components/Intro"
import SectionHeader from "../components/SectionHeader"
import ProjectCard from "../components/ProjectCard"
import ClientCard from "../components/ClientCard/index"
import TestimonialCard from "../components/TestimonialCard"
import CadburyLogo from "../components/svg/clients/cadbury-logo.svg"
import DeloitteLogo from "../components/svg/clients/deloitte-logo.svg"
import HMGovernmentLogo from "../components/svg/clients/hm-government-logo.svg"
import FordLogo from "../components/svg/clients/ford-logo.svg"

const Homepage = ({ data }) => {
  const post = data.page
  const featuredProjects = data.featuredProjects.edges
  const featuredTestimonials = data.featuredTestimonials.edges

  const clientsList = post.frontmatter.allClients
  const clients = [
    { title: clientsList[0], logo: CadburyLogo },
    { title: clientsList[1], logo: DeloitteLogo },
    { title: clientsList[2], logo: HMGovernmentLogo },
    { title: clientsList[3], logo: FordLogo },
  ]

  return (
    <section>
      <PageMeta page={post.frontmatter} />
      <Intro title={post.frontmatter.title} intro={post.frontmatter.intro} />

      <SectionHeader
        headingCopy="Featured Projects"
        type="h2"
        taglineCopy="Selected website and application builds."
      />

      <Grid width={240} gap={30}>
        {featuredProjects.map((project, index) => (
          <div key={project.node.id} style={{ display: `flex` }}>
            <ProjectCard project={project} index={index} />
          </div>
          ))}
      </Grid>

      <Link to="/projects/">More Projects</Link>

      <SectionHeader
        headingCopy="Services"
        type="h2"
        taglineCopy="Companies hire me to build cutting-edge web experiences for big-name clients."
      />

      <Grid width={480} gap={30}>
        <div>
          <Grid width={280} gap={30}>
            <div>
              <h3>Key Services & Skills</h3>
              <ul>
                {post.frontmatter.servicesPrimary.map(skill => (
                  <li key={skill}>
                    <Icon icon="check-square" />  {skill}
                  </li>
                  ))}
              </ul>
            </div>

            <div>
              <ul>
                {post.frontmatter.servicesSecondary.map(skill => (
                  <li key={skill}>
                    <Icon icon="check-square" /> {skill}
                  </li>
                  ))}
              </ul>
            </div>
          </Grid>
        </div>

        <div>
          <h3>Web Development</h3>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Grid>

      <SectionHeader
        headingCopy="Testimonials"
        type="h2"
        taglineCopy="What clients say."
      />

      <Grid width={240} gap={0}>
        {featuredTestimonials.map((testimonial, index) => (
          <div key={testimonial.node.id} style={{ display: `flex` }}>
            <TestimonialCard post={testimonial} index={index} />
          </div>
          ))}
      </Grid>

      <SectionHeader
        headingCopy="Clients"
        type="h2"
        taglineCopy="Brands and organisations I've produced work for."
      />

      <Grid width={240} gap={30}>
        {clients.map(client => (
          <div key={client.title} style={{ display: `flex` }}>
            <ClientCard client={client} />
          </div>
          ))}
      </Grid>

    </section>
  )
}

export default Homepage

Homepage.propTypes = {
  data: PropTypes.object.isRequired,
}

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
        allClients
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
                sizes(maxWidth: 500, maxHeight: 360) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
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
