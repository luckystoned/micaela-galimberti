/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import LogoFooter from "../../images/logo-blanco.svg"

import Header from "../Header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const title = data.site.siteMetadata?.title
  const currentPage = children[0].props.title

  return (
    <div className={currentPage}>
      <div className="container mx-auto">
        <Header siteTitle={title || `Title`} />
        <main>{children}</main>
        <footer>
          <div className="text-center items-center visible md:invisible py-6"> 
            <img src={LogoFooter} alt="Micaela Galimberti Logo SVG" className="m-auto" />
            <div className="text-white">
              GRAPHIC & UX/UI DESIGNER  /   Be,   Li,   IG  <br/> /  GET IN TOUCH   (+) 54 11 2391 1872  OR <br/> MICA.GALIMBERTI@GMAIL.COM  /  2022 ©
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
