import React from "react"
import PropTypes from "prop-types"
import Grid from "react-css-grid"
import Img from "gatsby-image"
import Icon from "@fortawesome/react-fontawesome"

import styles from "./index.module.css"

const BioCard = ({ avatar, col1, col2 }) => (
  <div style={{ width: `80%`, margin: `0 auto` }}>
    <div className={styles.avatar}>
      <Img resolutions={avatar} alt="David Brookes" />
      <p>
        <a style={{ color: `#000` }} href="https://github.com/dbrookes" target="_blank" rel="noopener noreferrer">
          <Icon icon={[`fab`, `github`]} size="lg" fixedWidth />
        </a>
        <a style={{ color: `#000` }} href="https://linkedin.com/in/dbrookes" target="_blank" rel="noopener noreferrer">
          <Icon icon={[`fab`, `linkedin`]} size="lg" fixedWidth />
        </a>
        <a style={{ color: `#000` }} href="https://angel.co/dbrookes" target="_blank" rel="noopener noreferrer">
          <Icon icon={[`fab`, `angellist`]} size="lg" fixedWidth />
        </a>
        <a style={{ color: `#000` }} href="https://twitter.com/_dbrookes" target="_blank" rel="noopener noreferrer">
          <Icon icon={[`fab`, `twitter`]} size="lg" fixedWidth />
        </a>
      </p>
    </div>
    <Grid width={420} gap={30}>
      <div style={{ textAlign: `justify` }} dangerouslySetInnerHTML={{ __html: col1 }} />
      <div style={{ textAlign: `justify` }} dangerouslySetInnerHTML={{ __html: col2 }} />
      <div />
    </Grid>
  </div>
)

BioCard.propTypes = {
  avatar: PropTypes.object.isRequired,
  col1: PropTypes.string.isRequired,
  col2: PropTypes.string.isRequired,
}

export default BioCard
