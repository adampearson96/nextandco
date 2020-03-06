import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types"
import Navbar from "./navbar";
import Footer from "./footer";
import ContactForm from "./contactform";
import "../scss/layout.scss";

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

  return (
    <div className="site-container">
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
      <Navbar />
      <div className="content-container">{children}</div>
      <Footer />
      <ContactForm />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
