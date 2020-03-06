import React from "react";
import { Link } from "gatsby";
import "../scss/buttons.scss";

class Buttons extends React.Component {
  render() {
    return (
      <section className="section buttons-section">
        <div className="container">
          <Link
            to={this.props.link1}
            className="btn"
            title={this.props.linktitle1}>
            {this.props.linktitle1}
          </Link>
          <Link
            to={this.props.link2}
            className="btn btn-invert"
            title={this.props.linktitle2}>
            {this.props.linktitle2}
          </Link>
        </div>
      </section>
    );
  }
}

export default Buttons;
