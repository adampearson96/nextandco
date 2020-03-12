import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo-white.svg"
import "../scss/footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-max-width">
        <div className="container">
          <div className="footer-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Next and Co" />
            </Link>
            <div className="divider"></div>
            <div className="slogan">
              <p>Continuous Improvement</p>
            </div>
          </div>
          <div className="footer-menu">
            <div className="content">
              <p>© 2020 Level 7/22 Albert Rd, South Melbourne VIC3205</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
