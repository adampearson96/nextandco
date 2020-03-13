import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import HeroSection from "../components/herosection"
import aboutuswhowearehero from "../images/about-us-who-we-are-hero.jpg"
import aboutusourcorevalueshero from "../images/about-us-our-core-values-hero.jpg"

import "../scss/about.scss"

const AboutPage = ({ data }) => {
  return (
    <div className="about-us-page">
      <Layout>
        <HeroSection
          heading="About Us"
          image={data.file.childImageSharp.fluid}
        />
        <section id="row-one">
          <div className="outer-container">
            <div className="container-max-width">
              <div className="inner-container">
                <div className="col-one">
                  <h2>Why we exist</h2>
                </div>
                <div className="col-two">
                  <p>
                    We exist to make the digital world a better place. Our goal
                    is to work with our clients to define what ‘better’ looks
                    like and how it can be measured in a digital environment.
                  </p>
                  <p>
                    More sales, enquiries, downloads, or any other form of
                    engagement – we take accountability for measuring the
                    outcomes of our work and the pursuit of continuous
                    improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="row-two"
                 style={{
                   backgroundImage: `url(${aboutuswhowearehero})`,
                   backgroundPosition: `center center`,
                   backgroundSize: `100% 100%`,
                   backgroundRepeat: `no-repeat`,
                   backgroundAttachment: `cover`,
                 }}
        >
          <div className="outer-container">
            <div className="container-max-width">
              <div className="inner-container">
                <div className="col-one">
                  <h2>Who we are</h2>
                  <p>
                    We are strategists, media buyers, creatives and techies who
                    love what we do. We share a deep love of the digital world
                    that has profoundly influenced our lives and care deeply
                    about the impact our work has within it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="row-three">
          <div className="outer-container">
            <div className="container-max-width">
              <div className="inner-container row">
                <div className="col-one">
                  <h2>Our core values</h2>
                  <div className="list-items">
                    <div className="list-item">
                      <span className="number">01</span>
                      <div className="content">
                        <h3>Passion</h3>
                        <p>The fuel for everything we do</p>
                      </div>
                    </div>
                    <div className="list-item">
                      <span className="number">02</span>
                      <div className="content">
                        <h3>Continuous Learning</h3>
                        <p>Be humble and always aim to know more tomorrow</p>
                      </div>
                    </div>
                    <div className="list-item">
                      <span className="number">03</span>
                      <div className="content">
                        <h3>Accountability</h3>
                        <p>The buck stops with us</p>
                      </div>
                    </div>
                    <div className="list-item">
                      <span className="number">04</span>
                      <div className="content">
                        <h3>Authenticity</h3>
                        <p>Say it like it is.</p>
                      </div>
                    </div>
                    <div className="list-item">
                      <span className="number">05</span>
                      <div className="content">
                        <h3>All for 1 and 1 for all</h3>
                        <p>Support and help everyone in our network</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-two">
                  <img src={aboutusourcorevalueshero} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="row-four">
          <div className="outer-container">
            <div className="container-max-width">
              <div className="inner-container">
                <div className="col-one">
                  <h3>
                    Many of Australia's leading businesses partner with us, you
                    should too.
                  </h3>
                  <Link to="/contact" className="btn">
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default AboutPage

export const query = graphql`
  query {
    file(relativePath: { eq: "about-herosection-image.jpg" }) {
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
