import React from "react"

import "../scss/contactForm.scss"

class ContactForm extends React.Component {
  render() {
    return (
      <section id="contact-form-container">
        <div className="outer-container">
          <h2>Talk to us</h2>
          <form>
            <label>
              First Name
              <input type="text" name="first-name" placeholder="First Name" />
            </label>
            <label>
              Last Name
              <input type="text" name="first-name" placeholder="Last Name" />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" placeholder="Phone" />
            </label>
            <label>
              Email
              <input type="email" name="first-name" placeholder="Email" />
            </label>
            <button type="submit">Get in touch</button>
          </form>
        </div>
      </section>
    )
  }
}

export default ContactForm
