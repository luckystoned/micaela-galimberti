import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Contact = () => (
  <Layout>
    <Seo title="Contact" />
    <h1>Contact Page</h1>
    <Link to="/">Homepage</Link>
  </Layout>
)

export default Contact
