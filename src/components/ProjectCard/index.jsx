import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Link from "gatsby-link"

import ButtonTo from "../ButtonTo"

import styles from "./index.module.css"

const ProjectCard = ({ project, index }) => {
  const projectData = project.node.frontmatter

  return (
    <div className={index === 2 ? `${styles.item} ${styles.third}` : styles.item}>
      <Link to={projectData.path}>
        <Img sizes={projectData.thumb.childImageSharp.sizes} />
      </Link>
      <div className={styles.customCard}>
        <h2><Link to={projectData.path}>{projectData.title}</Link></h2>
        <p>{projectData.excerpt}</p>
        <ButtonTo to={projectData.path} style={{ float: `right`, marginBottom: `20px`, textTransform: `uppercase` }}>Project Details</ButtonTo>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number,
}

ProjectCard.defaultProps = {
  index: 0,
}

export default ProjectCard
