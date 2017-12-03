import React from 'react'
import { Card } from 'antd'
import Img from 'gatsby-image'

import styles from './index.module.css'

class TestimonialCard extends React.Component {
  render() {
    const testimonialData = this.props.post.node.frontmatter

    return (
      <Card noHovering className={styles.testimonial}>
        <blockquote>
          <Img resolutions={testimonialData.thumb.childImageSharp.resolutions} />
          <div dangerouslySetInnerHTML={{ __html: this.props.post.node.html }} />
          <cite>
            <a target="_blank" rel="noreferrer noopener" href={testimonialData.linkedIn}>{testimonialData.title}</a> ~ {testimonialData.jobTitle}
          </cite>
        </blockquote>
      </Card>
    )
  }
}

export default TestimonialCard
