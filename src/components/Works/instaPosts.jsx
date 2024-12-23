'use client';
import React from 'react';
import Link from 'next/link';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

const link= () => {            //remember the onclick attribute mentioned in img tag is having name **link**

  window.location.href = "https://www.instagram.com/novotech.uae/";
 
  }

const swiperOptions = {
  modules: [Navigation, Autoplay],
  slidesPerView: 5,
  centeredSlides: true,
  loop: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  autoplay: {
    delay: 50,
    disableOnInteraction: false,
  },
  speed: 8000,
  breakpoints: {
    320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false,
      },
      991: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 5,
      },
  }
}

function instaPost() {
  return (
    <section className="work-carousel2 metro section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <img src='/img/insta/instaLogo.gif' style={{width:"25px", height: "25px"}}/>  
              <h6 className="wow fadeIn" data-wow-delay=".5s">Instagram</h6>
              <h3 className="wow color-font">
                Our Recent Posts
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 no-padding">
            <div className="swiper-container">
              <Swiper className="swiper-wrapper" {...swiperOptions}>
                <SwiperSlide className="swiper-slide">
                  <div className="content">
                    <div className="img">
                      <span className="imgio">
                        <div className="wow cimgio" data-delay="500"></div>
                        <img src="/img/insta/posts/1.png" alt="" style={{borderRadius: "15px", height:"350px", width: "350px"}}/>
                      </span>
                    </div>
                    <div className="cont">
                      <h4>
                        <Link href="https://www.instagram.com/novotech.uae/">
                          NOVOTECH
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <div className="content">
                    <div className="img">
                      <span className="imgio">
                        <div className="wow cimgio" data-delay="500"></div>
                        <img src="/img/insta/posts/2.png" alt="" style={{borderRadius: "15px", height:"350px", width: "350px"}}/>
                      </span>
                    </div>
                    <div className="cont">
                      <h4>
                        <Link href="https://www.instagram.com/novotech.uae/">
                          NOVOTECH
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <div className="content">
                    <div className="img">
                      <span className="imgio">
                        <div className="wow cimgio" data-delay="500"></div>
                        <img src="/img/insta/posts/3.png" alt="" style={{borderRadius: "15px", height:"350px", width: "350px"}}/>
                      </span>
                    </div>
                    <div className="cont">
                      <h4>
                        <Link href="https://www.instagram.com/novotech.uae/">
                          NOVOTECH
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <div className="content">
                    <div className="img">
                      <span className="imgio">
                        <div className="wow cimgio" data-delay="500"></div>
                        <img src="/img/insta/posts/4.png" alt="" style={{borderRadius: "15px", height:"350px", width: "350px"}}/>
                      </span>
                    </div>
                    <div className="cont">
                      <h4>
                        <Link href="https://www.instagram.com/novotech.uae/">
                          NOVOTECH
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <div className="content">
                    <div className="img">
                      <span className="imgio">
                        <div className="wow cimgio" data-delay="500"></div>
                        <img src="/img/insta/posts/5.png" alt="" style={{borderRadius: "15px", height:"350px", width: "350px"}}/>
                      </span>
                    </div>
                    <div className="cont">
                      <h4>
                        <Link href="https://www.instagram.com/novotech.uae/">
                          NOVOTECH
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <div className="content">
                    <div className="img">
                      <span className="imgio">
                        <div className="wow cimgio" data-delay="500"></div>
                        <img src="/img/insta/posts/6.png" alt="" style={{borderRadius: "15px", height:"350px", width: "350px"}}/>
                      </span>
                    </div>
                    <div className="cont">
                      <h4>
                        <Link href="https://www.instagram.com/novotech.uae/">
                          NOVOTECH
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <div className="content">
                    <div className="img">
                      <span className="imgio">
                        <div className="wow cimgio" data-delay="500"></div>
                        <img src="/img/insta/posts/7.png" alt="" style={{borderRadius: "15px", height:"350px", width: "350px"}}/>
                      </span>
                    </div>
                    <div className="cont">
                      <h4>
                        <Link href="https://www.instagram.com/novotech.uae/">
                          NOVOTECH
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <div className="content">
                    <div className="img">
                      <span className="imgio">
                        <div className="wow cimgio" data-delay="500"></div>
                        <img src="/img/insta/posts/8.png" alt="" style={{borderRadius: "15px", height:"350px", width: "350px"}}/>
                      </span>
                    </div>
                    <div className="cont">
                      <h4>
                        <Link href="https://www.instagram.com/novotech.uae/">
                          NOVOTECH
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <div className="content">
                    <div className="img">
                      <span className="imgio">
                        <div className="wow cimgio" data-delay="500"></div>
                        <img src="/img/insta/posts/9.png" alt="" style={{borderRadius: "15px", height:"350px", width: "350px"}}/>
                      </span>
                    </div>
                    <div className="cont">
                      <h4>
                        <Link href="https://www.instagram.com/novotech.uae/">
                          NOVOTECH
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <div className="content">
                    <div className="img">
                      <span className="imgio">
                        <div className="wow cimgio" data-delay="500"></div>
                        <img src="/img/insta/posts/10.png" alt="" style={{borderRadius: "15px", height:"350px", width: "350px"}}/>
                      </span>
                    </div>
                    <div className="cont">
                      <h4>
                        <Link href="https://www.instagram.com/novotech.uae/">
                          NOVOTECH
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
                <i className="ion-ios-arrow-right"></i>
              </div>
              <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
                <i className="ion-ios-arrow-left"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default instaPost;