import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import AuditHeroSection from "../components/auditherosection";

import "../scss/conversionRateOptimisationAudit.scss";

const AuditConversionRateOptimisation = () => {
  return (
    <div id="conversion-rate-optimisation-audit">
      <Layout>
        <AuditHeroSection 
          heading="Conversion Rate Optimisation Audit"
          subheading="Analyse and benchmark your audience’s digital conversion journey, with a roadmap to continuous improvement"
          paragraph1heading="Quantitative Analysis"
          paragraph1description="Each step in your digital experience is assessed and benchmarked with an overall conversion uplift opportunity quantified"
          paragraph2heading="UX Analysis"
          paragraph2description="A heuristic deep dive into your current digital experience to put context to the quantitative analysis"
          paragraph3heading="Tech &amp; platform analysis"
          paragraph3description="An assessment of the platforms &amp; technology that enables your digital experience and would inform the implementation of your roadmap"
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