import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import styles from "./index.module.css"

const TestimonialCard = ({ post }) => {
  const testimonialData = post.node.frontmatter
  return (
    <div className={styles.testimonial}>
      <blockquote>
        <Img resolutions={testimonialData.thumb.childImageSharp.resolutions} />
        <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
        <cite>
          <a target="_blank" rel="noreferrer noopener" href={testimonialData.linkedIn}>{testimonialData.title}</a> - {testimonialData.jobTitle}
        </cite>
      </blockquote>
    </div>
  )
}

TestimonialCard.propTypes = {
  post: PropTypes.object.isRequired,
}

export default TestimonialCard
