import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"

import { Layout } from "antd"
import styles from "./index.module.css"

const { Sider } = Layout

const Sidebar = ({ collapsed, navToggle }) => (
  <Sider
    collapsedWidth="0"
    trigger={null}
    collapsed={collapsed}
    className={styles.sideBar}
  >
    <nav className={styles.menu}>
      <ul>
        <li><Link activeClassName="active" onClick={navToggle} to="/about/">About</Link></li>
        <li><Link activeClassName="active" onClick={navToggle} to="/projects/">Projects</Link></li>
        <li><Link activeClassName="active" onClick={navToggle} to="/services/">Services</Link></li>
        <li><Link activeClassName="active" onClick={navToggle} to="/contact/">Contact</Link></li>
      </ul>
    </nav>
  </Sider>
)

Sidebar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  navToggle: PropTypes.func.isRequired,
}

export default Sidebar
