import React from 'react'
import { Card, Icon } from 'antd'

import styles from './index.module.css'

class ServiceCard extends React.Component {
  render() {
    const serviceData = this.props.post.node

    return (
      <Card noHovering className={styles.service}>
        <Icon type={serviceData.frontmatter.icon} style={{ fontSize: `22px` }} />
        <h2>{serviceData.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: serviceData.html }} />
      </Card>
    )
  }
}

export default ServiceCard
