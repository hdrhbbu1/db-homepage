import React from "react"
import PropTypes from "prop-types"
import Icon from "@fortawesome/react-fontawesome"

import styles from "./index.module.css"

const Alert = ({ message, description, type }) => (
  <div className={`${styles.alert} ${styles[type]}`} role="alert">
    <Icon icon={type === `error` ? `exclamation-circle` : `check-circle`} size="2x" fixedWidth />
    <h3>{message}</h3>
    <p>{description}</p>
  </div>
)

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Alert
