
import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const KnowMe = () => (
  <Layout>
    <Seo title="Konw Me" />
    <h1>Konw Me Page</h1>
    <Link to="/">Homepage</Link>
  </Layout>
)

export default KnowMe
