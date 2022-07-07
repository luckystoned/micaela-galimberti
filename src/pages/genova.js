import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"



const Genova = () => (
  <Layout>
    <Seo title="Genova" />
    <div className="Projects px-5">
      <h2>Projects</h2>
      <div className="grid gap-2 grid-cols-5 grid-rows-1 my-6">
        <button type="button">Web</button>
        <button type="button">Brand</button>
        <button type="button">Digi</button>
        <button type="button">3D</button>
        <button type="button">Edit</button>
      </div>
      <div className="flex flex-col">
        <h3>Génova Pizzeria</h3>
        <span>( Redesign of the brand )</span>
        <h4>Rebranding</h4>
        <span>          
          Jan. 2022 <br/>
          Buenos Aires, Argentina
        </span>
          
          <ul>
            <li>• Illustration.</li>
            <li>• Brand identity.</li>
          </ul>
        <StaticImage src="../images/genova1.jpg" alt="Génova Pizzeria" layout="fullWidth"/>
        <StaticImage src="../images/genova2.jpg" alt="Génova Pizzeria" layout="fullWidth"/>
        <StaticImage src="../images/genova3.jpg" alt="Génova Pizzeria" layout="fullWidth"/>
        <StaticImage src="../images/genova4.jpg" alt="Génova Pizzeria" layout="fullWidth"/>
        <StaticImage src="../images/genova5.jpg" alt="Génova Pizzeria" layout="fullWidth"/>
        <StaticImage src="../images/genova6.jpg" alt="Génova Pizzeria" layout="fullWidth"/>
        <StaticImage src="../images/genova7.jpg" alt="Génova Pizzeria" layout="fullWidth"/>
        <StaticImage src="../images/genova8.jpg" alt="Génova Pizzeria" layout="fullWidth"/>
      </div>
    </div>
  </Layout>
)

export default Genova
