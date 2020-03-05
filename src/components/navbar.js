import React from "react";
import { Link } from "gatsby";
import logoBlack from "../images/logo-black.svg";
import mobileBackground from "../images/mobilebackground.png"
import "../scss/navbar.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState({
      active: !this.state.active
    },
      // after state has been updated,
      () => {
      // set the class in state for the navbar accordingly
        this.state.active ? this.setState({ navBarActiveClass: "is-active" }) : this.setState({ navBarActiveClass: "" });
      });
  };

  render() {
    return (
      <nav
        className={this.props.slug === '/' ? 'navbar is-transparent' : 'navbar'}
        role="navigation"
        aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img
                src={logoBlack}
                alt="Next and Co"
                style={{ width: "175px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()} role="navigation">
              <span className="top"/>
              <span className="middle"/>
              <span className="bottom"/>
            </div>
          </div>
          <div
            id="navMenu"
            style={{
              // TODO: Get something like this happening once image has loaded
              // opacity: this.state.loaded ? 0 : 1,
              backgroundImage: `url(${
                mobileBackground
                // TODO: Get something like this getting best image size
                // !!this.props.image.childImageSharp ? this.props.image.childImageSharp.fluid.src : this.props.image
              })`,
              backgroundPosition: `center center`,
              backgroundSize: `100% 50%`,
              backgroundRepeat: `no-repeat`,
              backgroundAttachment: `fixed`
            }}
            className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-items">
              <Link
                className="navbar-item"
                to="/capabilities"
                activeClassName="active">
                Capabilities
              </Link>
              <Link
                className="navbar-item"
                to="/case-studies"
                activeClassName="active">
                Case Studies
              </Link>
              <Link
                className="navbar-item"
                to="/about"
                activeClassName="active">
                About
              </Link>
              <Link
                className="navbar-item"
                to="/our-audits"
                activeClassName="active">
                Our Audits
              </Link>
              <Link
                className="navbar-item"
                to="/contact"
                activeClassName="active">
                Contact
              </Link>
            </div>
            <button className="get-in-touch btn">Get in touch</button>
            <div className="navbar-footer">
              <div className="links-bar">
                <a className="phone-number" href="tel:1300191950">1300 191 950</a>
                <div className="social-icons">
                  <a href="https://www.instagram.com" className="social-link instagram">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.96724 2L15.0325 2C17.7717 2 20.0001 4.22841 20 6.96735L20 15.0327C20 17.7716 17.7717 20 15.0325 20L6.96724 20C4.22831 20 2 17.7717 2 15.0327L2 6.96735C2 4.22841 4.22831 2 6.96724 2ZM15.0326 18.403C16.8911 18.403 18.4031 16.8911 18.4031 15.0326H18.403L18.403 6.96735C18.403 5.10903 16.891 3.59705 15.0325 3.59705L6.96724 3.59705C5.10892 3.59705 3.59705 5.10903 3.59705 6.96735L3.59705 15.0326C3.59705 16.8911 5.10892 18.4031 6.96724 18.403L15.0326 18.403ZM6.28571 11.0001C6.28571 8.40055 8.4005 6.28571 11 6.28571C13.5995 6.28571 15.7143 8.40055 15.7143 11.0001C15.7143 13.5996 13.5995 15.7143 11 15.7143C8.4005 15.7143 6.28571 13.5996 6.28571 11.0001ZM7.90898 11C7.90898 12.7044 9.29568 14.0909 11 14.0909C12.7043 14.0909 14.091 12.7044 14.091 11C14.091 9.29553 12.7044 7.90891 11 7.90891C9.29557 7.90891 7.90898 9.29553 7.90898 11Z" fill="white"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com" className="social-link facebook">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.4986 19L12.4986 11.7022L14.995 11.7022L15.3695 8.85725L12.4986 8.85725V7.04118C12.4986 6.21776 12.7308 5.65661 13.936 5.65661L15.4706 5.65599V3.11138C15.2052 3.07756 14.2942 3 13.2339 3C11.0198 3 9.50399 4.32557 9.50399 6.75942V8.85725H7L7 11.7022H9.50399L9.50399 19H12.4986Z" fill="white"/>
                      <mask id="mask0" masktype="alpha" maskUnits="userSpaceOnUse" x="7" y="3" width="9" height="16">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.4986 19L12.4986 11.7022L14.995 11.7022L15.3695 8.85725L12.4986 8.85725V7.04118C12.4986 6.21776 12.7308 5.65661 13.936 5.65661L15.4706 5.65599V3.11138C15.2052 3.07756 14.2942 3 13.2339 3C11.0198 3 9.50399 4.32557 9.50399 6.75942V8.85725H7L7 11.7022H9.50399L9.50399 19H12.4986Z" fill="white"/>
                      </mask>
                      <g mask="url(#mask0)"></g>
                    </svg>
                  </a>
                  <a href="https://google.com" className="social-link google">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M11 9.6L11 12.4H14.9606C14.3824 14.0296 12.8256 15.2 11 15.2C8.6844 15.2 6.8 13.3156 6.8 11C6.8 8.6844 8.6844 6.8 11 6.8C12.0038 6.8 12.9698 7.1598 13.7202 7.8136L15.5598 5.7024C14.2998 4.6048 12.6814 4 11 4C7.1402 4 4 7.1402 4 11C4 14.8598 7.1402 18 11 18C14.8598 18 18 14.8598 18 11V9.6L11 9.6Z" fill="white"/>
                      <mask id="mask0" masktype="alpha" maskUnits="userSpaceOnUse" x="4" y="4" width="14" height="14">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11 9.6L11 12.4H14.9606C14.3824 14.0296 12.8256 15.2 11 15.2C8.6844 15.2 6.8 13.3156 6.8 11C6.8 8.6844 8.6844 6.8 11 6.8C12.0038 6.8 12.9698 7.1598 13.7202 7.8136L15.5598 5.7024C14.2998 4.6048 12.6814 4 11 4C7.1402 4 4 7.1402 4 11C4 14.8598 7.1402 18 11 18C14.8598 18 18 14.8598 18 11V9.6L11 9.6Z" fill="white"/>
                      </mask>
                      <g mask="url(#mask0)"></g>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="address">
                <p>Level 7/22 Albert Rd, South Melbourne VIC 3205</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;