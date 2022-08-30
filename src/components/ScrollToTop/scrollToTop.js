import * as React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';


import BackToTop from "../../images/back-to-top.png"

const ScrollToTop = () => {
  return (
    <button className="no-button" type="button" onClick={() => scrollTo('#___gatsby')}>
        <img src={BackToTop} alt="Back To Top"/>
    </button>
  )
}

export default ScrollToTop
