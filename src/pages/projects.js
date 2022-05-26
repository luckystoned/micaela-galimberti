import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Projects" />
    <h1>Projects Page</h1>
    <Link to="/">Homepage</Link>
  </Layout>
)

export default SecondPage