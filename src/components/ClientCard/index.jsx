import React from 'react'
import styles from "./index.module.css"

const ClientCard = clientData => (
  <div className={styles.client}>
    <img src={clientData.client.logo} alt={clientData.client.title} />
  </div>
)

export default ClientCard
