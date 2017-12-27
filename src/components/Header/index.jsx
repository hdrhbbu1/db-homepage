import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import { Layout, Button } from "antd"

import styles from "./index.module.css"
import logo from "./logo.svg"

const { Header } = Layout

class MainHeader extends React.Component {
  constructor() {
    super()
    this.state = { max: 1, distanceY: 0 }
  }

  componentDidMount() {
    window.addEventListener(`scroll`, this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener(`scroll`, this.handleScroll, { passive: true })
  }

  handleScroll = () => {
    this.setState({
      max: document.documentElement.scrollHeight - document.body.offsetHeight,
      distanceY: window.pageYOffset || 0,
    })
  }

  render() {
    return (
      <div className={styles.spacer}>
        <Header className={styles.wrap}>
          <div className={styles.header}>
            <Link to="/" onClick={() => this.props.navToggle(`close`)}>
              <img
                src={logo}
                className={styles.logo}
                alt="David Brookes - Freelance Web Developer London"
              />
            </Link>

            <nav className={styles.menu}>
              <ul>
                <li><Link activeClassName="active" to="/about/">About</Link></li>
                <li><Link activeClassName="active" to="/projects/">Projects</Link></li>
                <li><Link activeClassName="active" to="/services/">Services</Link></li>
                <li><Link activeClassName="active" to="/contact/">Contact</Link></li>
              </ul>
            </nav>

            <Button
              className={styles.toggle}
              icon={this.props.collapsed ? `menu-unfold` : `menu-fold`}
              shape="circle"
              size="large"
              onClick={this.props.navToggle}
            >
              Open Nav
            </Button>

            <progress
              value={this.state.distanceY}
              max={this.state.max}
              className={styles.progress}
            />
          </div>
        </Header>
      </div>
    )
  }
}

MainHeader.propTypes = {
  collapsed: PropTypes.bool,
  navToggle: PropTypes.func.isRequired,
}

MainHeader.defaultProps = {
  collapsed: false,
}


export default MainHeader
