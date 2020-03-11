import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
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
      console.log(window.scrollY);

      if(window.scrollY <= height * 2) {
        activeSlide = 1;
      } else if(window.scrollY <= (height * 4)) {
        activeSlide = 2;
      } else if(window.scrollY <= (height * 6)) {
        activeSlide = 3;
      } else {
        activeSlide = 4;
      }
      this.setState({ activeSlide })
    })
  }
  
  render() {
    return (
      <Layout>
        <div id="homepage-scroller">
          <section className={this.state.activeSlide == 1 ? 'home-section home-section-1 is-active' : 'home-section home-section-1'}>
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
          <section className={this.state.activeSlide == 2 ? 'home-section home-section-2 is-active' : 'home-section home-section-2'}>
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
          <section className={this.state.activeSlide == 3 ? 'home-section home-section-3 is-active' : 'home-section home-section-3'}>
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
          <section className={this.state.activeSlide == 4 ? 'home-section home-section-4 is-active' : 'home-section home-section-4'}>
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
        <Buttons
          linktitle1="About Us"
          link1="/about"
          linktitle2="Get in touch"
          link2="/link2"
        />
        <div id="capabilities"></div>
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