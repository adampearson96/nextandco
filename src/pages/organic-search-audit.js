import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import AuditHeroSection from "../components/auditherosection";

import section02image from "../images/organic-search-image-02.png";
import section03image from "../images/organic-search-image-03.png";
import section04image from "../images/organic-search-image-04.png";

import "../scss/organicSearchAudit.scss";

const AuditOrganicSearch = () => {
  return (
    <div id="organic-search-audit">
      <Layout id="audit-organic-search">
        <AuditHeroSection 
          heading="Organic Search Audit"
          subheading="Understaznd the opportunity for your brand in the organic search space and how to capitalise on it"
          paragraph1heading="Search trends"
          paragraph1description="Understand how your audiences are engaging with search and what trends are around the corner"
          paragraph2heading="Market analysis"
          paragraph2description="Assess how your brand is performing in regards to organic share of voice and the quantify the value of improved performance"
          paragraph3heading="Competitor analysis"
          paragraph3description="Get insight into how your competitors are performing in organic search"
          paragraph4heading="Build roadmap"
          paragraph4description="Define both an immediate and long-term roadmap to capture more organic search traffic"
          formheading="Get your organic search audit today"
        />
        <section id="row-two">
          <div className="outer-container">
            <div className="col-one">
              <h2>Competitor analysis <span>organic keyboard share of voice</span></h2>
            </div>
            <div className="col-two">
              <div className="list-item vanguard">
                <div className="circle"></div>
                <p>Vanguard</p>
              </div>
              <div className="list-item blackrock">
                <div className="circle"></div>
                <p>Blackrock</p>
              </div>
              <div className="list-item fidelity">
                <div className="circle"></div>
                <p>Fidelity</p>
              </div>
            </div>
            <div className="col-three">
              <img src={section02image} alt="" />
            </div>
          </div>
        </section>
        <section id="row-three">
          <div className="outer-container">
            <div className="col-one">
              <img src={section03image} alt="" />
            </div>
          </div>
        </section>
        <section id="row-four">
          <img src={section04image} alt="" />
        </section>
        <section id="row-five">
          <div className="outer-container">
            <div className="col-one">
              <h3>Many of Australia's leading businesses partner with us, you should too.</h3>
              <Link 
                to="/contact"
                className="btn">Get in touch</Link>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default AuditOrganicSearch;