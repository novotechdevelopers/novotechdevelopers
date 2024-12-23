import React from "react";

const Header4 = ({ sliderRef }) => {
  return (
    <header ref={sliderRef} className="particles circle-bg valign">

      {/*<script async src="https://www.googletagmanager.com/gtag/js?id=G-DQ6WVSXBJB"></script>
      <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)};
              gtag('js', new Date());
              gtag('config', 'G-DQ6WVSXBJB');
      </script>*/}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont text-center">
              <h1>
                <span className="color-font"> NovoTech </span><span className="color-font">Digital Marketing & App Development Experts</span>.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="gradient-circle"></div>
      <div className="gradient-circle two"></div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Header4;
