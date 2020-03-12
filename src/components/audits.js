import React from "react"
import { Link } from "gatsby"
import "../scss/audits.scss"

class Audits extends React.Component {
  render() {
    return (
      <section className="section audits-section">
        <div className="outer-container">
          <div className="container-max-width">
            <div className="inner-container">
              <h5 className="section-header">Our audits</h5>
              <div className="column-container">
                <div className="column">
                  <Link to="/digital-media-audit" className="" title="">
                    Digital Media <span>Audit</span>
                  </Link>
                  <p>Audit me, bruz</p>
                </div>
                <div className="column">
                  <Link to="/organic-search-audit" className="" title="">
                    Search Engine Optimisation <span>Audit</span>
                  </Link>
                  <p>Page one, or die trying</p>
                </div>
                <div className="column">
                  <Link
                    to="/conversion-rate-optimisation-audit"
                    className=""
                    title=""
                  >
                    Conversion Rate Optimisation <span>Audit</span>
                  </Link>
                  <p>Get more bang for your buck</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Audits
