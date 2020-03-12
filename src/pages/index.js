import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Audits from "../components/audits"
import Buttons from "../components/buttons"

import lebuns from "../case-studies/le-buns/00/le-buns-00-hero.jpg"
import sesamestreet from "../case-studies/sesame-street/00/sesame-street-00-hero.jpg"
import strattonfinance from "../case-studies/stratton-finance/00/stratton-finance-00-hero.jpg"
import whizz from "../case-studies/whizz/00/whizz-00-hero.jpg"

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

    window.addEventListener('keydown', (e) => {
      e.preventDefault();
      let activeSlide = this.state.activeSlide;
      if(e.keyCode === 38 ) {
        if(activeSlide > 1 ) {
          activeSlide--;
        }
        this.setState({ activeSlide: activeSlide })
      }
      if(e.keyCode === 40) {
        if(activeSlide < 4) {
          activeSlide++;
        }
        if(activeSlide === 4) {
          
        }
        this.setState({ activeSlide: activeSlide })
      }
    })
  }
  
  render() {    
    return (
      <Layout>
        <div id="homepage-scroller">
          <section className={this.state.activeSlide === 1 ? 'home-section home-section-1 is-active' : 'home-section home-section-1'}>
            <div 
              className="background-image" 
              style={{ backgroundImage: `url(${whizz})`}}>
              <div className="slide-number-wrapper container-max-width">
                01.
                <span className="line"></span>
                selected works
              </div>
            </div>
            <div className="slide-content-wrapper container-max-width">
              <h2>Clean your house mate</h2>
              <p>Our full service strategy made these guys some money.</p>
            </div>
          </section>
          <section className={this.state.activeSlide === 2 ? 'home-section home-section-2 is-active' : 'home-section home-section-2'}>
            <div className="background-image" style={{ backgroundImage: `url(${lebuns})`}}>
              <div className="slide-number-wrapper container-max-width">
                02.
                <span className="line"></span>
                selected works
              </div>
            </div>
            <div className="slide-content-wrapper container-max-width">
              <h2>Clean your house mate</h2>
              <p>Our full service strategy made these guys some money.</p>
            </div>
          </section>
          <section className={this.state.activeSlide === 3 ? 'home-section home-section-3 is-active' : 'home-section home-section-3'}>
            <div className="background-image" style={{ backgroundImage: `url(${strattonfinance})`}}>
              <div className="slide-number-wrapper container-max-width">
                03.
                <span className="line"></span>
                selected works
              </div>
            </div>
            <div className="slide-content-wrapper container-max-width">
              <h2>Clean your house mate</h2>
              <p>Our full service strategy made these guys some money.</p>
            </div>
          </section>
          <section className={this.state.activeSlide === 4 ? 'home-section home-section-4 is-active' : 'home-section home-section-4'}>
            <div className="background-image" style={{ backgroundImage: `url(${sesamestreet})`}}>
              <div className="slide-number-wrapper container-max-width">
                04.
                <span className="line"></span>
                selected works
              </div>
            </div>
            <div className="slide-content-wrapper container-max-width">
              <h2>Clean your house mate</h2>
              <p>Our full service strategy made these guys some money.</p>
            </div>
          </section>
        </div>
        <section className="row-capabiltiies">
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
                      <li><p>Creative</p></li>
                      <li><p>Content</p></li>
                      <li><p>Branding</p></li>
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