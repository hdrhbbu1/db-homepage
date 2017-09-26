import React from 'react'

import styles from './index.module.css'

class ResponsiveImage extends React.Component {
  render() {
    const image = this.props.image.childImageSharp.responsiveResolution
    const imageRatio = `${(1 / image.aspectRatio) * 100}%`

    return (
      <span className={styles.wrapper} style={{ maxWidth: `${this.props.maxwidth}` }}>
        <span style={{ paddingBottom: `${imageRatio}`, backgroundImage: `url(${image.base64})` }}>
          <img alt={this.props.title} src={image.src} srcSet={image.srcSet} sizes={image.sizes} />
        </span>
      </span>
    )
  }
}

export default ResponsiveImage
