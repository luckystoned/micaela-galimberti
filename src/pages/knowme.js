
import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const KnowMe = () => (
  <Layout>
    <Seo title="Konw Me" />
    <h1>Konw Me Page</h1>
    <Link to="/">Homepage</Link>
  </Layout>
)

export default KnowMe
