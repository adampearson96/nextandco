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

      {/* This will be the custom cursor */}
      <div class="circle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <defs />
          <path d="M256 0C114.618 0 0 114.618 0 256s114.618 256 256 256 256-114.618 256-256S397.382 0 256 0zm0 469.333c-117.818 0-213.333-95.515-213.333-213.333S138.182 42.667 256 42.667 469.333 138.182 469.333 256 373.818 469.333 256 469.333z" />
        </svg>
      </div>
    </footer>
  )
}

export default Footer
