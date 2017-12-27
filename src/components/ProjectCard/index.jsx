import React from "react"
import PropTypes from "prop-types"
import { Card } from "antd"
import Img from "gatsby-image"
import Link from "gatsby-link"

import styles from "./index.module.css"

const ProjectCard = ({ project, index }) => {
  const projectData = project.node.frontmatter

  return (
    <Card noHovering bodyStyle={{ padding: `0px` }} className={index === 2 ? `${styles.item} ${styles.third}` : styles.item}>
      <Link to={projectData.path}>
        <Img sizes={projectData.thumb.childImageSharp.sizes} />
      </Link>
      <div className={styles.customCard}>
        <h2><Link to={projectData.path}>{projectData.title}</Link></h2>
        <p>{projectData.excerpt}</p>
        <hr />
        <Link to={projectData.path} style={{ float: `right`, marginBottom: `20px`, textTransform: `uppercase` }}>Project Details</Link>
      </div>
    </Card>
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
