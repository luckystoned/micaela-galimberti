import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const KnowMe = () => (
  <Layout>
    <Seo title="Know Me" />
    <div className="know-me px-5">
      <h1>Know Me</h1>
      <div className="my-6">
        <p>
          Hello there! I'm Mica,<br/>
          a Graphic & UX/UI Designer from Buenos Aires, Argentina.
        </p>
      </div>
      <div className="my-6 pr-6">
        <span>
          Part of my work is shape brands, build visual systems, bring web solutions and illustrate or animate when I have a chance. <br/>
          I'm currently focus on UX-UI design, trying to improve in it day by day and generate a positive impact on people's lives. <br/>
          I love to think the concept of design as a tool that provides strategy solutions and empower the community.
        </span>
      </div>
      <div className="my-6">
        <span>
          Dowload my CV <br/> 
          <a href="#" target="_blank">ES</a><br/> 
          <a href="#" target="_blank">EN</a>
        </span>
      </div>
      <div className="my-6">
        <span>
          Skills
        </span>
      </div>
      <div className="my-6">
        <span>
          Figma, Adobe Illustrator, Adobe Photoshop, Adobe AfterEffects,  Adobe InDesign, Adobe Premier, Adobe Xd,  Procreate App.
        </span>
      </div>
    </div>
  </Layout>
)

export default KnowMe
