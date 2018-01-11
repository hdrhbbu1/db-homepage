import React from "react"
import PropTypes from "prop-types"

import styles from "./index.module.css"

const ProjectDetails = ({ project, description }) => {
  const year = new Date(project.date).getFullYear()

  return (
    <div className={styles.root}>

      <div dangerouslySetInnerHTML={{ __html: description }} />

      <h2>Technology</h2>
      <ul>
        {project.technology.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <dl className={styles.meta}>
        {project.agency &&
          <span>
            <dt><strong>Agency:</strong></dt>
            <dd>{project.agency}</dd>
          </span>
        }
        {project.client &&
          <span>
            <dt><strong>Client:</strong></dt>
            <dd>{project.client}</dd>
          </span>
        }
        {project.date &&
          <span>
            <dt><strong>Year:</strong></dt>
            <dd>{year}</dd>
          </span>
        }
        {project.link &&
          <span>
            <dt><strong>Link:</strong></dt>
            <dd><a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></dd>
          </span>
        }
      </dl>
    </div>
  )
}

ProjectDetails.propTypes = {
  project: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
}

export default ProjectDetails
