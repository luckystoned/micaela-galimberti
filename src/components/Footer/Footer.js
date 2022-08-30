import * as React from "react"
import { Link } from "gatsby";


import LogoFooter from "../../images/logo-blanco.svg"
import ScrollToTop from "../ScrollToTop";

const Footer = ({currentPage}) => {

  return (
    <footer>
      <div className="text-center items-center visible md:invisible py-6">
        {currentPage === "Home" ? "" : <ScrollToTop/>} 
        <img src={LogoFooter} alt="Micaela Galimberti Logo SVG" className="m-auto py-3 " />
        <div className="text-white">
          GRAPHIC & UX/UI DESIGNER  /   
          <Link to="https://www.behance.net/micagalimberti" target="_blank" className="underline">BE</Link>,
          <Link to="https://www.linkedin.com/in/micaelagalimberti/" target="_blank" className="underline">LI</Link>,
          <Link to="https://www.instagram.com/its.micki/" target="_blank" className="underline">IG</Link>,
          <br/> /  GET IN TOUCH   
          <Link to="tel:+541123911872" target="_blank" className="underline">(+) 54 11 2391 1872</Link>,
          OR 
          <br/> 
          <Link to="mailto:MICA.GALIMBERTI@GMAIL.COM" target="_blank" className="underline">MICA.GALIMBERTI@GMAIL.COM</Link>  
          /  
          {(new Date().getFullYear())} ©
        </div>
      </div>
    </footer> 
  )
}

export default Footer
