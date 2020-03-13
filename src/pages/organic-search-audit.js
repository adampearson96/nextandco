import React from "react"
import Layout from "../components/layout"
import AuditHeroSection from "../components/auditherosection"

import icondata from "../images/icon-data.svg"
import iconroadmap from "../images/icon-roadmap.svg"
import iconmagnifyingglass from "../images/icon-magnifying-glass.svg"
import icongraph from "../images/icon-graph.svg"
import heroimage from "../images/organic-search-audit-hero.jpg"
import audithelpdevice from "../images/organic-search-audit-help-device.png"
import audithelpscorecard from "../images/organic-search-audit-help-scorecard.png"

import "../scss/organicSearchAudit.scss"

const AuditOrganicSearch = () => {
  return (
    <div id="organic-search-audit">
      <Layout id="audit-organic-search">
        <section id="row-one">
          <div className="outer-container">
            <div className="container-max-width">
              <div className="inner-container">
                <div className="col-one">
                  <h1>Organic Search Audit</h1>
                </div>
                <div className="col-two">
                  <p>
                    Understand the opportunity for your brand in the organic
                    search space and how to capitalise on it
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AuditHeroSection
          heroimage={heroimage}
          paragraph1icon={iconmagnifyingglass}
          paragraph1heading="Search trends"
          paragraph1description="Understand how your audiences are engaging with search and what trends are around the corner"
          paragraph2icon={icondata}
          paragraph2heading="Market analysis"
          paragraph2description="Assess how your brand is performing in regards to organic share of voice and the quantify the value of improved performance"
          paragraph3icon={icongraph}
          paragraph3heading="Competitor analysis"
          paragraph3description="Get insight into how your competitors are performing in organic search"
          paragraph4icon={iconroadmap}
          paragraph4heading="Build roadmap"
          paragraph4description="Define both an immediate and long-term roadmap to capture more organic search traffic"
          formheading="Enquire about an organic search audit for your brand"
        />
        <section id="audit-help">
          <div className="outer-container">
            <div className="container-max-width">
              <div className="inner-container">
                <div className="col">
                  <img src={audithelpdevice} alt="" />
                </div>
                <div className="col">
                  <img src={audithelpscorecard} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default AuditOrganicSearch
