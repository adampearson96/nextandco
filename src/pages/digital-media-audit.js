import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import AuditHeroSection from "../components/auditherosection"

import section02image1 from "../images/digital-media-icon-1.svg"
import section02image2 from "../images/digital-media-icon-2.svg"
import section02image3 from "../images/digital-media-icon-3.svg"
import iconstopwatch from "../images/icon-stopwatch.svg"
import iconlightbulb from "../images/icon-light-bulb.svg"
import icondata from "../images/icon-data.svg"
import iconroadmap from "../images/icon-roadmap.svg"
import heroimage from "../images/digital-media-audit-hero.jpg"
import "../scss/digitalMediaAudit.scss"

const AuditDigitalMedia = ({ data }) => {
  return (
    <div id="digital-media-audit">
      <Layout>
        <section id="row-one">
          <div className="outer-container">
            <div className="container-max-width">
              <div className="inner-container">
                <div className="col-one">
                  <h1>Digital Media Audit</h1>
                </div>
                <div className="col-two">
                  <p>
                    Our digital media audit is a holistic examination of your
                    brands digital media effectiveness
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AuditHeroSection 
          heroimage={heroimage}
          paragraph1icon={iconstopwatch}
          paragraph1heading="Locate waste spend"
          paragraph1description="Assess your brands media and find spend that is not attributed to a conversion"
          paragraph2icon={icondata}
          paragraph2heading="Media tech"
          paragraph2description="Assess your brands use of adtech"
          paragraph3icon={iconlightbulb}
          paragraph3heading="Find scale"
          paragraph3description="Find opportunities to scale media spend (eg. audiences, channels, campaigns etc)"
          paragraph4icon={iconroadmap}
          paragraph4heading="Build roadmap"
          paragraph4description="Define both an immediate and long-term roadmap to optimise performance and channel strategy"
          formheading="Enquire about a digital media audit for your brand"
        />
        <section id="row-two">
          <div className="outer-container">
            <div className="container-max-width">
              <div className="inner-container">
                <div className="col-one">
                  <img src={section02image1} alt="" />
                  <h3>$45,820</h3>
                  <p>In wasted spend</p>
                </div>
                <div className="col-two">
                  <img src={section02image2} alt="" />
                  <h3>75%</h3>
                  <p>Performance uplift in 3-6 months</p>
                </div>
                <div className="col-three">
                  <img src={section02image3} alt="" />
                  <h3>$50-80</h3>
                  <p>CPA (estimate at scale)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="row-three">
          <div className="outer-container">
            <div className="container-max-width">
              <div className="inner-container">
                <div className="col-one">
                  <h2>Digital media scorecard</h2>
                  <div className="scorecard">
                    <div className="row">
                      <h3>Search</h3>
                      <h3>Score</h3>
                    </div>
                    <div className="row">
                      <p>Account Structure</p>
                      <p>2/5</p>
                    </div>
                    <div className="row">
                      <p>Conversion Setup</p>
                      <p>1/5</p>
                    </div>
                    <div className="row">
                      <p>
                        Media Spend Wastage Due to Match TYpes, Ad Scheduling,
                        Network and Location
                      </p>
                      <p>1/5</p>
                    </div>
                    <div className="row">
                      <p>Bid Strategy</p>
                      <p>1/5</p>
                    </div>
                    <div className="row">
                      <p>Audience Coverage</p>
                      <p>1/5</p>
                    </div>
                    <div className="row">
                      <p>Campaign Metrics</p>
                      <p>3/5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="row-four">
          <div className="outer-container">
            <div className="container-max-width">
              <div className="inner-container">
                 
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default AuditDigitalMedia
