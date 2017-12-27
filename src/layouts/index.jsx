import React from "react"
import PropTypes from "prop-types"
import { Layout } from "antd"

import "typeface-open-sans"
import "typeface-montserrat"
import "typeface-merriweather"

import MainHeader from "../components/Header"
import MainFooter from "../components/Footer"
import Sidebar from "../components/Sidebar"

import "../css/global.css"
import styles from "./index.module.css"

const { Content } = Layout

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = { collapsed: true }
    this.handleSidebar = this.handleSidebar.bind(this)
    this.handleViewportChange = this.handleViewportChange.bind(this)
  }

  componentDidMount() {
    if (matchMedia) window.matchMedia(`(max-width: 760px)`).addListener(this.handleViewportChange)
  }

  handleSidebar(direction = `toggle`) {
    if (direction === `close`) {
      this.setState({
        collapsed: true,
      })
    } else {
      this.setState({
        collapsed: !this.state.collapsed,
      }, () => {
        if (!this.state.collapsed) {
          const closeZone = document.getElementsByClassName(styles.dimmer)[0]

          const closeMe = () => {
            this.setState({ collapsed: true }, () => {
              closeZone.removeEventListener(`touchend`, () => closeMe())
              closeZone.removeEventListener(`mouseup`, () => closeMe())
            })
          }

          closeZone.addEventListener(`touchend`, () => closeMe())
          closeZone.addEventListener(`mouseup`, () => closeMe())
        }
      })
    }
  }

  handleViewportChange() {
    this.setState({
      collapsed: true,
    })
  }

  render() {
    const { children } = this.props

    return (
      <Layout className={styles.layout}>

        <MainHeader collapsed={this.state.collapsed} navToggle={this.handleSidebar} />
        <Layout>
          <Content className={`${this.state.collapsed ? `` : styles.dimmer} ${styles.content}`}>
            <main>
              { children() }
            </main>
          </Content>
          <Sidebar collapsed={this.state.collapsed} navToggle={this.handleSidebar} />
        </Layout>
        <MainFooter collapsed={this.state.collapsed} />
      </Layout>
    )
  }
}

Template.propTypes = {
  children: PropTypes.func.isRequired,
}

export default Template
