import React from "react"
import Layout from "../components/layout"
import HeroSection from "../components/herosection";
import Buttons from "../components/buttons";

import image from "../images/hero1.jpg";

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection
        heading="Putting investors interest first."
        description="Next&amp;Co partnered with Vanguard Investments to launch their new digital experience."
        image={image}
      />
      <Buttons
        linktitle1="Our Capabilities"
        link1="/link1"
        linktitle2="Get in touch"
        link2="/link2"
      />
    </Layout>
  )
}

export default IndexPage