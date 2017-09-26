import React from 'react'

import styles from './index.module.css'

class Intro extends React.Component {
  render() {
    return (
      <div className={styles.intro}>
        <h1>{ this.props.title }</h1>
        <p>{ ` - ${this.props.intro}` }</p>
      </div>
    )
  }
}

export default Intro
