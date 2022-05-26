import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <Link to="/">
      {siteTitle}
    </Link>
    <Link to="/projects">
      Projects
    </Link>
    <Link to="/knowme">
      Know Me
    </Link>
    <Link to="/contact">
      Contact
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
