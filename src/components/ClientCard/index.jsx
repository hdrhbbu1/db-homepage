import React from 'react'
import styles from "./index.module.css"

const ClientCard = (client) => {
  const svgFile = require(`../svg/clients/${client.client.logo}.svg`)

  return (
    <div className={styles.client}>
      <img src={svgFile} alt={client.client.title} />
    </div>
  )
}

export default ClientCard
