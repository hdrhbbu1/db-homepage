import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Icon from "@fortawesome/react-fontawesome"

import styles from "./index.module.css"

const TestimonialCard = ({ post }) => {
  const testimonialData = post.node.frontmatter
  return (
    <div className={styles.testimonial}>
      <blockquote>
        <Img resolutions={testimonialData.thumb.childImageSharp.resolutions} />
        {testimonialData.linkedIn &&
          <a style={{ color: `#2b2b2d` }} href={testimonialData.linkedIn} target="_blank" rel="noopener noreferrer">
            <Icon icon={[`fab`, `linkedin`]} fixedWidth />
          </a>
        }
        {testimonialData.twitter &&
          <a style={{ color: `#2b2b2d` }} href={testimonialData.twitter} target="_blank" rel="noopener noreferrer">
            <Icon icon={[`fab`, `twitter`]} fixedWidth />
          </a>
        }
        {testimonialData.angellist &&
          <a style={{ color: `#2b2b2d` }} href={testimonialData.angellist} target="_blank" rel="noopener noreferrer">
            <Icon icon={[`fab`, `angellist`]} fixedWidth />
          </a>
        }

        <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
        <cite>
          {testimonialData.title} - {testimonialData.jobTitle}
        </cite>
      </blockquote>
    </div>
  )
}

TestimonialCard.propTypes = {
  post: PropTypes.object.isRequired,
}

export default TestimonialCard
