"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import countries from './countries'; 

const ContactForm = ({ theme }) => {
  const [selectedCountryCode, setSelectedCountryCode] = useState('+1'); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rhs1k2k', 'template_ok37jms', e.target, 'Hjn_XQpy-pMwUdqJ5')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Error sending message, please try again.');
      });
  };

  const handleCountryCodeChange = (event) => {
    setSelectedCountryCode(event.target.value);
  };

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Sign Up With Us</h4>

              <form id="contact-form" onSubmit={sendEmail}>
                <div className="messages"></div>

                <div className="controls">
                  <div className="form-group">
                    <input id="form_name" type="text" name="name" placeholder="Name" required />
                  </div>

                  <div className="form-group">
                    <input id="form_email" type="email" name="email" placeholder="Email" required />
                  </div>

                  <div className="form-group">
                    <select id="countryCode" value={selectedCountryCode} onChange={handleCountryCodeChange} required>
                      {countries.map((country) => (
                        <option key={country.code} value={country.dial_code}>
                          {country.flag} {country.name} ({country.dial_code})
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      id="form_phone"
                      name="phone"
                      placeholder="Phone Number"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <textarea id="form_message" name="message" placeholder="Message" rows="4" required></textarea>
                  </div>

                  <button type="submit" className={`butn ${theme === 'light' ? 'dark' : 'bord'}`}>
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50">Contact Info.</h4>
              {/* Replace contentFormData with actual data or import it if needed */}
              <div className="item mb-40">
                <h5>
                  <a href="#0">contact@example.com</a>
                </h5>
                <h5>(123) 456-7890</h5>
              </div>
              <div className="item">
                <h6>
                  123 Main Street
                  <br />
                  City, Country 12345
                </h6>
              </div>
              <div className="social mt-50">
                <a href="https://www.facebook.com/profile.php?id=61559263057420" className="icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/novotech.uae?igsh=MTgwMXBxY3N0Y295dA==" className="icon">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
