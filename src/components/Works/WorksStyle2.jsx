'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import initIsotope from "@/common/initIsotope";

function WorksStyle2({ grid, filterPosition, hideFilter }) {
  useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 500);
  }, []);

  return (
    <section className={`${grid ? (grid === 3 ? 'three-column' : null) : null} portfolio section-padding pb-70`}>
      {
        !hideFilter &&
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">Services</h6>
                <h3 className="wow color-font fz-40 fw-500">
                  Our Services &amp; <br />
                  Creative Solutions
                </h3>
                <p>Explore our expert services in web design, app development, branding, and printing to elevate your business.</p>
              </div>
            </div>
          </div>
        </div>
      }
      <div className="container">
        <div className="row">
          {
            !hideFilter &&
            <div className={`filtering ${filterPosition === 'center'
              ? 'text-center'
              : filterPosition === 'left'
                ? 'text-left'
                : 'text-right'
              } col-12`}>
              <div className="filter">
                <span data-filter="*" className="active"> All </span>
                <span data-filter=".brand">Digital Marketing Solutions</span>
                <span data-filter=".web">Custom Application Solutions</span>
                <span data-filter=".graphic">Design & Branding Services</span>
              </div>
            </div>
          }

          <div className="gallery full-width">
            <div className={`${grid === 3
              ? 'col-lg-4 col-md-6'
              : grid === 2
                ? 'col-md-6'
                : 'col-12'
              } items graphic wow fadeInUp`} data-wow-delay=".4s">
              <div className="item-img">
                <Link className="imago wow" href="/project-details2/project-details2-dark">
                  <img src="/img/portfolio/portfolio/1/1.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Graphic & Brand Design</h6>
                <span><a href="#0">Creating unique, memorable designs that represent your brand’s identity with precision.</a> </span>
              </div>
            </div>

            <div className={`${grid === 3
              ? 'col-lg-4 col-md-6'
              : grid === 2
                ? 'col-md-6'
                : 'col-12'
              } items web wow fadeInUp`} data-wow-delay=".4s">
              <div className="item-img">
                <Link className="imago wow" href="/project-details2/project-details2-dark">
                  <img src="/img/portfolio/portfolio/1/2.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Website Design & Development</h6>
                <span><a href="#0">Building stunning, user-centric websites that elevate your brand’s presence.</a> </span>
              </div>
            </div>

            <div className={`${grid === 3
              ? 'col-lg-4 col-md-6'
              : grid === 2
                ? 'col-md-6'
                : 'col-12'
              } items brand wow fadeInUp`} data-wow-delay=".4s">
              <div className="item-img">
                <Link href="/project-details2/project-details2-dark" className="imago wow">
                  <img src="/img/portfolio/portfolio/1/3.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Brand Strategy & Planning</h6>
                <span><a href="#0">Shaping the future of your brand with a clear, actionable strategy.</a></span>
              </div>
            </div>

            <div className={`${grid === 3
              ? 'col-lg-4 col-md-6'
              : grid === 2
                ? 'col-md-6'
                : 'col-12'
              } items graphic wow fadeInUp`} data-wow-delay=".4s">
              <div className="item-img">
                <Link className="imago wow" href="/project-details2/project-details2-dark">
                  <img src="/img/portfolio/portfolio/1/4.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Custom Printing Services</h6>
                <span><a href="#0">Turning your designs into high-quality printed materials that make a lasting impression.</a> </span>
              </div>
            </div>

            <div className={`${grid === 3
              ? 'col-lg-4 col-md-6'
              : grid === 2
                ? 'col-md-6'
                : 'col-12'
              } items web wow fadeInUp`} data-wow-delay=".4s">
              <div className="item-img">
                <Link className="imago wow" href="/project-details2/project-details2-dark">
                  <img src="/img/portfolio/portfolio/1/5.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Mobile App Development</h6>
                <span><a href="#0">Bringing your business to life on mobile, delivering seamless experiences everywhere.</a> </span>
              </div>
            </div>

            <div className={`${grid === 3
              ? 'col-lg-4 col-md-6'
              : grid === 2
                ? 'col-md-6'
                : 'col-12'
              } items brand wow fadeInUp`} data-wow-delay=".4s">
              <div className="item-img">
                <Link className="imago wow" href="/project-details2/project-details2-dark">
                  <img src="/img/portfolio/portfolio/1/6.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Creative Content Development</h6>
                <span><a href="#0">Crafting compelling content that captivates your audience and drives results.</a> </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorksStyle2