import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Icon from "@fortawesome/react-fontawesome"

import Button from "../Button"

import styles from "./index.module.css"
import logo from "./logo.svg"

class Header extends React.Component {
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
      <div className={styles.wrap}>
        <header className={styles.header}>
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
            onClick={this.props.navToggle}
          >
            <Icon icon="check-square" />
          </Button>

          <progress
            value={this.state.distanceY}
            max={this.state.max}
            className={styles.progress}
          />
        </header>
      </div>
    )
  }
}

Header.propTypes = {
  isOpen: PropTypes.bool,
  navToggle: PropTypes.func.isRequired,
}

Header.defaultProps = {
  isOpen: false,
}

export default Header
