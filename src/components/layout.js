import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Navbar from "./navbar";
import Footer from "./footer";
import "../scss/layout.scss";

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contactActive: false,
      auditActive: false,
      contactActiveClass: "",
      auditMenuActiveClass: "",
    }
  }

  toggleContact = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        contactActive: !this.state.contactActive,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.contactActive
          ? this.setState({ contactActiveClass: "is-active" })
          : this.setState({ contactActiveClass: "" })
      }
    )
  }

  toggleAuditMenu = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        auditMenuActive: !this.state.auditMenuActive,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.auditMenuActive
          ? this.setState({ auditMenuActiveClass: "is-active" })
          : this.setState({ auditMenuActiveClass: "" })
      }
    )
  }

  render() {
    const { children } = this.props;

    return (
      <div className="site-container">
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={ data => (
            <Helmet>
              <html lang="en" />
              <meta charSet="utf-8" />
              <title>{data.site.siteMetadata.title}</title>
              <meta name="description" content={data.site.siteMetadata.description} />
              <meta property="og:title" content={data.site.siteMetadata.title} />
              <meta property="og:description" content={data.site.siteMetadata.description} />
              <meta property="og:url" content="/" />
              <meta property="twitter:card" content="summary_large_image" />
            </Helmet>
          )} />
        <Navbar toggleAuditMenu={this.toggleAuditMenu} toggleContact={this.toggleContact} auditMenuActiveClass={this.state.auditMenuActiveClass} contactActiveClass={this.state.contactActiveClass} />
        <div className="content-container">{children}</div>
        <Footer />
      </div>
    );
  }
};

export default Layout;
