// ContactForm.js
"use client"; 

import React from 'react';
import emailjs from 'emailjs-com';
import Split from '@/components/Common/Split';
import contentFormData from "@/data/contact-form.json";

function ContactFormS({ theme }) {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rhs1k2k', 'template_ok37jms', e.target, 'Hjn_XQpy-pMwUdqJ5')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Error sending message, please try again.');
      });
  };

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Sign Up With us</h4>

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
              <Split>
                <h3 className="wow" data-splitting>{contentFormData.title}</h3>
              </Split>
              <div className="item mb-40">
                <h5>
                  <a href="#0">{contentFormData.email}</a>
                </h5>
                <h5>{contentFormData.phone}</h5>
              </div>
              <Split>
                <h3 className="wow" data-splitting>Visit Us.</h3>
              </Split>
              <div className="item">
                <h6>
                  {contentFormData.location.first}
                  <br />
                  {contentFormData.location.second}
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
}

export default ContactFormS;
