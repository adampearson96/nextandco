import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import HomepageHeroSection from "../components/homepageherosection"
import Buttons from "../components/buttons"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <HomepageHeroSection
        heading="Clean your house mate."
        description="Our full service strategy made these guys some money."
        image={data.file.childImageSharp.fluid}
      />
      <Buttons
        linktitle1="About Us"
        link1="/about"
        linktitle2="Get in touch"
        link2="/link2"
      />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "hero2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2880, quality: 100) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`