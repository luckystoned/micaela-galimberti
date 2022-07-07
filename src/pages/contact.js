import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Contact = () => (
  <Layout>
    <Seo title="Contact" />
    <div className="know-me px-5">
      <h1>Contact</h1>
      <div className="my-6">
        <p>
        Let’s talk, tell me
        about your project
        or inquire.
        </p>
      </div>
      <div className="my-6">
        <span>
          EMAIL <br/>
        </span>
        <span>
          mica.galimberti@gmail.com 
        </span>
      </div>
      <div className="my-6">
        <span>
          WHATS APP ME <br/>
        </span>
        <span>
          (+) 54 11 2391 1872
        </span>
      </div>
      <div className="my-6">
        <span>
          SOCIAL MEDIA <br/>
        </span>
        <span>
          (Be) /micagalimberti <br/>
        </span>
        <span>
          (Li) /micaelagalimberti <br/>
        </span>
        <span>
          (Ig) /its.micki
        </span>
      </div>
    </div>
  </Layout>
)

export default Contact
