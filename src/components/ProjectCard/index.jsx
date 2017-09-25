import React from 'react'
import { Card } from 'antd'
import Link from "gatsby-link"
import ResponsiveImage from "../ResponsiveImage"

import styles from './index.module.css'

const ProjectCard = (project, index) => {
  const projectData = project.project.node.frontmatter

  return (
    <Card bodyStyle={{ padding: `5px` }} className={index === 2 ? `${styles.item} ${styles.third}` : styles.item}>
      <Link to={projectData.path}>
        <ResponsiveImage image={projectData.thumb} maxwidth={`650px`} title={projectData.title} />
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

export default ProjectCard
