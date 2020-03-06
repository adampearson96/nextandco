import React from "react"
import Layout from "../components/layout"
import HeroSection from "../components/herosection";
import Buttons from "../components/buttons";

import image from "../images/hero2.jpg";

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection
        heading="Clean your house mate."
        description="Our full service strategy made these guys some money."
        image={image}
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