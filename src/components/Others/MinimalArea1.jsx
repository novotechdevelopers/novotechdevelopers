'use client';
import React, { useEffect } from 'react';
//= Scripts
import thumparallaxDown from '@/common/thumparallaxDown';


function MinimalArea1() {
  useEffect(() => {
    thumparallaxDown()
  }, [])

  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img className="thumparallax-down" src="/img/min-area.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">About us.</h4>
              <p className="wow txt" data-splitting>
              At NOVOTEC, we are a dedicated team of professionals committed to delivering innovative solutions in graphic design, social media marketing, and application development. Our passion for technology and creativity drives us to exceed expectations and deliver exceptional results.   </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6><span>1</span> Our Mission</h6>
                  <p>
                  Our mission is to empower businesses and individuals by providing top-notch design and development services that enhance their digital presence and drive growth.      </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6><span>2</span> Our Goals</h6>
                  <p>
                  Our goal is to turn your ideas into impactful digital solutions, combining expertise and creativity to achieve excellence and help you succeed in a competitive landscape.  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6><span>3</span> Why Us?</h6>
                  <p>
                  Choose NOVOTEC for our unparalleled commitment to quality, innovation, and client satisfaction. We bring a unique blend of technical skill and creative vision to every project, ensuring solutions that are both effective and aligned with your objectives.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MinimalArea1