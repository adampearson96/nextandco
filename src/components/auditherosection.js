import React from "react"

import "../scss/auditHeroSection.scss"

class AuditHeroSection extends React.Component {
  render() {
    return (
      <section
        className="audit-hero-section"
        style={{
          backgroundImage: `url(${this.props.heroimage})`,
          backgroundPosition: `center center`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div className="outer-container">
          <div className="container-max-width">
            <div className="inner-container">
              <div className="col-one">
                <div className="list-item">
                  <div className="icon">
                    <img src={this.props.paragraph1icon} alt="" />
                  </div>
                  <div className="content">
                    <h2>{this.props.paragraph1heading}</h2>
                    <p>{this.props.paragraph1description}</p>
                  </div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <img src={this.props.paragraph2icon} alt="" />
                  </div>
                  <div className="content">
                    <h2>{this.props.paragraph2heading}</h2>
                    <p>{this.props.paragraph2description}</p>
                  </div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <img src={this.props.paragraph3icon} alt="" />
                  </div>
                  <div className="content">
                    <h2>{this.props.paragraph3heading}</h2>
                    <p>{this.props.paragraph3description}</p>
                  </div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <img src={this.props.paragraph4icon} alt="" />
                  </div>
                  <div className="content">
                    <h2>{this.props.paragraph4heading}</h2>
                    <p>{this.props.paragraph4description}</p>
                  </div>
                </div>
              </div>
              <div className="col-two">
                <div className="form-container">
                  <h2>{this.props.formheading}</h2>
                  <form
                    name="audit"
                    method="post"
                    action="/thankyou/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                  >
                    <label>
                      Your Name
                      <input
                        type="text"
                        required={true}
                        name="your-name"
                        placeholder="Your name"
                      />
                    </label>
                    <label>
                      URL
                      <input
                        type="text"
                        required={true}
                        name="website-url"
                        placeholder="Website URL"
                      />
                    </label>
                    <label>
                      Email
                      <input
                        type="email"
                        required={true}
                        name="email"
                        placeholder="Your email"
                      />
                    </label>
                    <label>
                      Phone
                      <input
                        type="tel"
                        name="phone"
                        required={true}
                        placeholder="Your phone"
                      />
                    </label>
                    <label>
                      Message
                      <textarea
                        name="your-message"
                        required={true}
                        rows="3"
                        placeholder="Your message"
                      />
                    </label>
                    <button className="btn btn-invert" type="submit">
                      Get your audit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default AuditHeroSection
