import React from "react"
import PropTypes from "prop-types"
import { Card, Icon } from "antd"

import styles from "./index.module.css"

const ServiceCard = ({ post }) => {
  const serviceData = post.node

  return (
    <Card noHovering className={styles.service}>
      <Icon type={serviceData.frontmatter.icon} />
      <h2>{serviceData.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: serviceData.html }} />
    </Card>
  )
}

ServiceCard.propTypes = {
  post: PropTypes.node.isRequired,
}

export default ServiceCard
