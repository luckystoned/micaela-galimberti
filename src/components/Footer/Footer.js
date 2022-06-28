import * as React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';


import LogoFooter from "../../images/logo-blanco.svg"
import BackToTop from "../../images/back-to-top.png"

const Footer = () => (
  <footer>
    <div className="text-center items-center visible md:invisible py-6"> 
      <button className="no-button" type="button" onClick={() => scrollTo('#___gatsby')}>
        <img src={BackToTop} alt="Back To Top"/>
      </button>
      <img src={LogoFooter} alt="Micaela Galimberti Logo SVG" className="m-auto py-3 " />
      <div className="text-white">
        GRAPHIC & UX/UI DESIGNER  /   Be,   Li,   IG  <br/> /  GET IN TOUCH   (+) 54 11 2391 1872  OR <br/> MICA.GALIMBERTI@GMAIL.COM  /  2022 ©
      </div>
    </div>
  </footer> 
)

export default Footer
