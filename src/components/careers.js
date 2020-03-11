import React from "react"
import { Link } from "gatsby"
import "../scss/careers.scss"

class Careers extends React.Component {
  render() {
    return (
      <section className="section careers-section">
        <div className="container">
          <h5 className="section-header">Join our team</h5>
          <div className="column-container">
            <div className="column">
              <p>
                <Link to={this.props.link1} className="" title="">
                  {this.props.linktitle1}
                </Link>
                {this.props.description1}
              </p>
            </div>
            <div className="column">
              <p>
                <Link to={this.props.link2} className="" title="">
                  {this.props.linktitle2}
                </Link>
                {this.props.description2}
              </p>
            </div>
            <div className="column">
              <p>
                <Link to={this.props.link3} className="" title="">
                  {this.props.linktitle3}
                </Link>
                {this.props.description3}
              </p>
            </div>
          </div>
          <Link to="/careers" className="no-decoration line-link" title="">
            View all careers
          </Link>
        </div>
      </section>
    )
  }
}

export default Careers
