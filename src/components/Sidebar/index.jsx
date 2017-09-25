import React from 'react'
import Link from 'gatsby-link'

import { Layout } from 'antd'
import styles from "./index.module.css"

const { Sider } = Layout

class Sidebar extends React.Component {
  render() {
    return (
      <Sider
        collapsedWidth="0"
        trigger={null}
        collapsed={this.props.collapsed}
        className={styles.sideBar}
      >
        <nav className={styles.menu}>
          <ul>
            <li><Link activeClassName="active" onClick={this.props.navToggle} to="/about/">About</Link></li>
            <li><Link activeClassName="active" onClick={this.props.navToggle} to="/projects/">Projects</Link></li>
            <li><Link activeClassName="active" onClick={this.props.navToggle} to="/services/">Services</Link></li>
            <li><Link activeClassName="active" onClick={this.props.navToggle} to="/contact/">Contact</Link></li>
          </ul>
        </nav>
      </Sider>
    )
  }
}

export default Sidebar
