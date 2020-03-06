import React from "react";
import "../scss/auditHeroSection.scss";

class AuditHeroSection extends React.Component {
  render() {
    return (
      <section className="audit-hero-section">
        <div className="outer-container">
          <div className="col-one">
            <h1>{this.props.heading}</h1>
            <p className="subheading">{this.props.subheading}</p>
            <div className="list-item">
              <h2>{this.props.paragraph1heading}</h2>
              <p>{this.props.paragraph1description}</p>
            </div>
            <div className="list-item">
              <h2>{this.props.paragraph2heading}</h2>
              <p>{this.props.paragraph2description}</p>
            </div>
            <div className="list-item">
              <h2>{this.props.paragraph3heading}</h2>
              <p>{this.props.paragraph3description}</p>
            </div>
            <div className="list-item">
              <h2>{this.props.paragraph4heading}</h2>
              <p>{this.props.paragraph4description}</p>
            </div>
          </div>
          <div className="col-two">
            <div className="form-container">
              <h2>{this.props.formheading}</h2>
              <form>
                <label>
                  Your Name
                  <input type="text" name="your-name" placeholder="Your name" />  
                </label>
                <label>
                  URL
                  <input type="text" name="website-url" placeholder="Website URL" />  
                </label>
                <label>
                  Email
                  <input type="email" name="email" placeholder="Email" />
                </label>
                <label>
                  Message
                  <textarea name="your-message" rows="3" placeholder="Your message" />
                </label>
                <button className="submit" type="submit">Send message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AuditHeroSection;