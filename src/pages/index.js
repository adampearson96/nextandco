import React from "react"
import { graphql } from "gatsby"
import HomepageSlides from "../components/homepageSlides"
import Layout from "../components/layout"
import Audits from "../components/audits"
import Buttons from "../components/buttons"

import "../scss/index.scss"

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 1
    }
  }
  componentDidMount() {
    const height = window.innerHeight;
    window.addEventListener('scroll', () => {
      let activeSlide = this.state.activeSlide;

      if(window.scrollY <= height) {
        activeSlide = 1;
      } else if(window.scrollY <= (height * 2)) {
        activeSlide = 2;
      } else if(window.scrollY <= (height * 3)) {
        activeSlide = 3;
      } else {
        activeSlide = 4;
      }
      this.setState({ activeSlide: activeSlide })
    })

    // window.addEventListener('keydown', (e) => {
    //   e.preventDefault();
    //   let activeSlide = this.state.activeSlide;
    //   if(e.keyCode === 38 ) {
    //     if(activeSlide > 1 ) {
    //       activeSlide--;
    //     }
    //     this.setState({ activeSlide: activeSlide })
    //   }
    //   if(e.keyCode === 40) {
    //     if(activeSlide < 4) {
    //       activeSlide++;
    //     }
    //     if(activeSlide === 4) {
          
    //     }
    //     this.setState({ activeSlide: activeSlide })
    //   }
    // })
  }
  
  render() {    
    return (
      <Layout>
        <HomepageSlides />
        <section id="capabilities" className="row-capabiltiies">
          <div className="outer-container">
            <div className="container-max-width">
              <div className="inner-container">
                <div className="row-one">
                  <h2>Capabiltiies.</h2>
                </div>
                <div className="row-two">
                  <div className="col-one">
                    <h3>Traffic</h3>
                    <ul>
                      <li><p>Digital Media</p></li>
                      <li><p>Traditional Media</p></li>
                      <li><p>Organic Search</p></li>
                      <li><p>Social</p></li>
                    </ul>
                  </div>
                  <div className="col-two">
                    <h3>Experience</h3>
                    <ul>
                      <li><p>UX/CX Design</p></li>
                      <li><p>Web &amp; App Design</p></li>
                      <li><p>Creative & Content Production</p></li>
                      <li><p>Conversion Rate Optimisation</p></li>
                      <li><p>CRM &amp; Loyalty</p></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Audits />
        <Buttons
          linktitle1="About Us"
          link1="/about"
          linktitle2="Get in touch"
          link2="/link2"
        />
      </Layout>
    )
  }
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