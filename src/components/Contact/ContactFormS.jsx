"use client"; // Ensure this directive is at the top for React 18+

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import countries from './countries'; // Ensure this path is correct
import Split from '../Common/Split';
import contentFormData from "@/data/contact-form.json"; // Ensure this path is correct

const ContactForm = ({ theme }) => {
  const [selectedCountryCode, setSelectedCountryCode] = useState('+1'); 
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);  
  const [message, setMessage] = useState('');  

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log('Form submission triggered');

    const fullPhoneNumber = `${selectedCountryCode} ${phoneNumber}`;
    console.log('Full Phone Number:', fullPhoneNumber);

    const formData = new FormData(e.target);
    formData.append('phone_number', fullPhoneNumber);

    setLoading(true);  
    try {
      console.log('Sending email...');
      const result = await emailjs.sendForm('service_rhs1k2k', 'template_ok37jms', e.target, 'Hjn_XQpy-pMwUdqJ5');
      console.log('Email sent successfully:', result);
      setMessage('Thank you for reaching out! Your message has been sent successfully. Our Team will get back to You Shortly!');
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage('Oops! Something went wrong. Please try again later.');
    } finally {
      setLoading(false); 
    }
  };

  const handleCountryCodeChange = (event) => {
    setSelectedCountryCode(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Sign Up With Us</h4>

              <form id="contact-form" onSubmit={sendEmail}>
                
                <div className="messages">
                  {message && <p>{message}</p>}
                </div>

                <div className="controls">
                  <div className="form-group">
                    <input 
                      id="from_name" 
                      type="text" 
                      name="from_name" 
                      placeholder="Your Name" 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <input 
                      id="form_email" 
                      type="email" 
                      name="from_email" 
                      placeholder="Your Email" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      id="form_logo" 
                      type="text" 
                      name="from_logo" 
                      placeholder="Please Link to your Company Profile or Logo Image!" 
                      required 
                    />
                  </div>
                  
                  <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    <select 
                      id="countryCode" 
                       name = "country_code"
                      value={selectedCountryCode} 
                      onChange={handleCountryCodeChange} 
                      required
                      style={{ flex: '1', minWidth: '120px' }}
                    >
                      {countries.map((country) => (
                        <option key={country.code} value={country.dial_code}>
                          {country.flag} {country.code} ({country.dial_code})
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      id="form_phone"
                      name="phone_number"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      placeholder="Phone Number"
                      pattern="[0-9]*"
                      style={{ flex: '2', minWidth: '200px' }}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <textarea 
                      id="form_message" 
                      name="message" 
                      placeholder="Type your Query Here...... !!" 
                      rows="4" 
                      required 
                    />
                  </div>

                  <button type="submit" className={`butn ${theme === 'light' ? 'dark' : 'bord'}`} disabled={loading}>
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
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
