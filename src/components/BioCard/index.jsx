import React from "react"
import { Row, Col } from "antd"
import Link from "gatsby-link"
import Img from "gatsby-image"

import styles from "./index.module.css"

const BioCard = ({ avatar, col1 }) => (
  <Row gutter={30} type="flex">
    <Col xs={24} sm={4} lg={3} xl={{ span: 2, offset: 2 }}>
      <div className={styles.avatar}>
        <Img resolutions={avatar} alt="David Brookes" />
      </div>
    </Col>
    <Col xs={24} sm={20} lg={10} xl={8}>
      <div style={{ textAlign: `justify` }} dangerouslySetInnerHTML={{ __html: col1 }} />
    </Col>
    <Col xs={24} sm={{ span: 20, offset: 4 }} lg={{ span: 10, offset: 0 }} xl={8}>
      <div style={{ textAlign: `justify` }}>
        <p>{ `If you’re starting a new web venture or you're an online business with an existing project then `}
          <Link to="/contact/">get in touch</Link>
          { ` to discuss your requirements and timelines.` }
        </p>
        <p>{ `Agency in need of an extra pair of hands? Looking for a technical co founder? ` }
          <Link to="/contact/">Contact me</Link>
          { ` and let me know what you're up to and I'll see how I can help. `}
        </p>
        <p>{ `This website is built with React, GraphQL and AWS Serverless, it is open source and `}
          <a target="_blank" rel="noreferrer noopener" href="https://github.com/dbrookes/db-homepage">
          available on GitGub
          </a>.
        </p>
      </div>
    </Col>
  </Row>
)

export default BioCard
