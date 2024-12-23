import React from 'react';

function Footer({ hideBGCOLOR }) {
  return (
    <footer className={`${!hideBGCOLOR ? 'sub-bg' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Office Address</h6>
                    <p>Office # 206 , Al Etihad Building, Port Saeed Area, Opposite to Pullman Hotel, City Center Diera, Dubai, UAE</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>info@nta.ae</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+971(04) 570 4168</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-chat"></span>
                  <div className="cont">
                    <h6>Whatsapp Us</h6>
                    <p>+971(50) 334 2774</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
           
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src="/img/logo-light.png" alt="logo" />
              </div>
              <div className="social">
                <a href="https://www.facebook.com/profile.php?id=61559263057420">
                  <i className="fab fa-facebook-f"></i>
                </a>
               
                <a href="https://www.instagram.com/novotech.uae/?igsh=MTgwMXBxY3N0Y295dA%3D%3D">
                  <i className="fab fa-instagram"></i>
                </a>
                
              </div>
              <div className="copy-right">
                <p>
                  © 2024 Hanya Zia Made with passion .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer