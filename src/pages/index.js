import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import '../styles/pages/index.css'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="hidden md:block">
      <h1>Know me</h1>
      <h2>Projects</h2>
      <h3>Hello there! I'm Mica, a Graphic & UX/UI Designer from Buenos Aires, Argentina.</h3>
      <p>Part of my work is shape brands, build visual systems, bring web solutions and illustrate or animate when I have a chance. <br/> I'm currently focus on UX-UI design, trying to improve in it day by day and generate a positive impact on people's lives.<br/> I love to think the concept of design as a tool that provides strategy solutions and empower the community.</p>
    </div>
  </Layout>
)

export default IndexPage
