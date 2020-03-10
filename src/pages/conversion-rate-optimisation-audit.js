import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import AuditHeroSection from "../components/auditherosection";

import icondata from "../images/icon-data.svg";
import iconroadmap from "../images/icon-roadmap.svg";
import iconcomputers from "../images/icon-computers.svg";
import iconcode from "../images/icon-code.svg";
import "../scss/conversionRateOptimisationAudit.scss";

const AuditConversionRateOptimisation = () => {
  return (
    <div id="conversion-rate-optimisation-audit">
      <Layout>
        <section id="row-one">
          <div className="outer-container">
            <div className="col-one">
              <h1>Conversion Rate Optimisation Audit</h1>
            </div>
            <div className="col-two">
              <p>Analyse and benchmark your audience’s digital conversion journey, with a roadmap to continuous improvement</p>
            </div>
          </div>
        </section>
        <AuditHeroSection 
          paragraph1icon={icondata}
          paragraph1heading="Quantitative Analysis"
          paragraph1description="Each step in your digital experience is assessed and benchmarked with an overall conversion uplift opportunity quantified"
          paragraph2icon={iconcomputers}
          paragraph2heading="UX Analysis"
          paragraph2description="A heuristic deep dive into your current digital experience to put context to the quantitative analysis"
          paragraph3icon={iconcode}
          paragraph3heading="Tech &amp; platform analysis"
          paragraph3description="An assessment of the platforms &amp; technology that enables your digital experience and would inform the implementation of your roadmap"
          paragraph4icon={iconroadmap}
          paragraph4heading="Build testing &amp; implementation roadmap"
          paragraph4description="Implementation roadmap - Define a testing and implementation schedule to realise conversion uplift"
          formheading="Get your audit today"
        />
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

export default AuditConversionRateOptimisation;