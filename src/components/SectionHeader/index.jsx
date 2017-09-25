import React from 'react'

import styles from './index.module.css'

class SectionHeader extends React.Component {
  render() {
    return (
      <div>
        { this.props.type === `h1` && <h1>{ this.props.headingCopy }</h1> }
        { this.props.type === `h2` && <h2 className={this.props.smallHeader ? styles.smallHeader : null}>{ this.props.headingCopy }</h2> }
        <hr className={styles.divider} />
        <p className={this.props.smallLead ? styles.smallLead : styles.lead}>
          { this.props.taglineCopy }
        </p>
      </div>
    )
  }
}

export default SectionHeader
