import React from "react"
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import HeroSection from "../components/herosection";
import Careers from "../components/careers";
import Buttons from "../components/buttons";

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <HeroSection
        heading={frontmatter.herosection.heading}
        description={frontmatter.herosection.description}
        image={frontmatter.featuredimage.childImageSharp.fluid.src}
      />
      <Careers 
          linktitle1={frontmatter.careers.linktitle1}
          link1={frontmatter.careers.link1}
          description1={frontmatter.careers.description1}
          linktitle2={frontmatter.careers.linktitle2}
          link2={frontmatter.careers.link2}
          description2={frontmatter.careers.description2}
          linktitle3={frontmatter.careers.linktitle3}
          link3={frontmatter.careers.link3}
          description3={frontmatter.careers.description3} />
      <Buttons
        linktitle1="Our Capabilities"
        link1="/link1"
        linktitle2="Get in touch"
        link2="/link2"
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    })
  })
};

export default IndexPage


export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        herosection {
          heading
          description
        }
        careers {
          linktitle1
          link1
          description1
          linktitle2
          link2
          description2
          linktitle3
          link3
          description3
        }
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2880, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
