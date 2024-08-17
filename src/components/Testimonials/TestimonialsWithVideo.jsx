'use client';
import React, { useState } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
//= Components
import ModalVideo from "@/components/Common/ModalVideo";

const swiperOptions = {
  loop: true,
  speed: 500,
  slidesPerView: 1,
}

function TestimonialsWithVideo() {
  const [isOpen, setOpen] = useState(false);

  function openVideo(e) {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <section className="block-sec">
      <div className="background bg-img pt-100 pb-0 parallaxie" style={{ backgroundImage: "url('/img/bg-vid.jpg')" }}
        data-overlay-dark="5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="vid-area">
                <span className="text">Watch Video</span>
                <div className="vid-icon cursor-pointer" onClick={openVideo}>
                  <a className="vid">
                    <div className="vid-butn">
                      <span className="icon">
                        <i className="fas fa-play"></i>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="testim-box">
                <div className="head-box">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">Our Clients</h6>
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    What Client&apos;s Say?
                  </h4>
                </div>
                <Swiper {...swiperOptions} className="slic-item wow fadeInUp" data-wow-delay=".5s">
                  <SwiperSlide className="item">
                    <p>
                    Our experience with NOVOTEC’s web and mobile app development has been exceptional. They transformed our ideas into functional and user-friendly applications, all while maintaining clear communication and meeting deadlines.
                    </p>
                   
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <p>
                    The social media marketing strategies implemented by NOVOTEC exceeded our expectations. Their expertise in crafting engaging content and targeting the right audience has significantly boosted our online presence.   </p>
                  
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <p>
                    NOVOTEC's graphic design team truly brought our brand to life with their innovative and detailed designs. Their commitment to understanding our vision and executing it flawlessly made all the difference.  </p>
                 
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen}
        videoId="127203262"
        onClose={() => setOpen(false)}
      />
    </section>
  )
}

export default TestimonialsWithVideo;