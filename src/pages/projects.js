import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"


const Projects = () => (
  <Layout>
    <Seo title="Projects" />
    <div className="Projects px-5">
      <h1>Projects</h1>
      <div className="grid gap-2 grid-cols-5 grid-rows-1 my-6">
        <button type="button">Web</button>
        <button type="button">Brand</button>
        <button type="button">Digi</button>
        <button type="button">3D</button>
        <button type="button">Edit</button>
      </div>
      <div className="flex flex-col">
        <Link to="/genova">
          <div className="my-5">
            <StaticImage src="../images/genova.jpg" alt="Génova Pizzeria" layout="fullWidth"/>
            <div className="uppercase my-5">
              <span className="float-left">Génova Pizzeria</span>
              <span className="float-right"> /2022</span>
            </div>
          </div>
        </Link>
        <Link to="/genova">
          <div className="my-5">
            <StaticImage src="../images/archive.jpg" alt="Archive Closet" layout="fullWidth"/>
            <div className="uppercase my-5">
              <span className="float-left">Archive Closet</span>
              <span className="float-right"> /2022</span>
            </div>
          </div>
        </Link>
        <Link to="/genova">
          <div className="my-5">
            <StaticImage src="../images/subliming.jpg" alt="Subliming" layout="fullWidth"/>
            <div className="uppercase my-5">
              <span className="float-left">Subliming</span>
              <span className="float-right"> /2021</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </Layout>
)

export default Projects
