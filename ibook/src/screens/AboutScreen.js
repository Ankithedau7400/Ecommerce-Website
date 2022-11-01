import React from "react";

export default function AboutScreen() {
  return (
    <>
      <div className="section1">
        <div className="container1">
          <div className="content-section1">
            <div className="title1">
              <h1>The Dream Stop</h1>
            </div>
            <div className="content1">
              <h3>Dream Stop Story</h3>
              <p>
                Dream Stop was started in <strong>September 2022</strong> as a
                platform that give its users feasible, time saving and a secure
                destination to look for their desired products.. Basically the
                project describes how to manage for good performance and better
                services for the clients.
                <br /> <br /> <br />
                <h3>
                  Dream Stop was started by 3 individuals with a vision of
                  making it one of the leading platforms for commercial
                  activities
                </h3>
              </p>
            </div>
            <div className="social1">
              <a href="https://www.facebook.com/">
                <i>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174848.png"
                    alt="Facebook"
                    height="50px"
                    width="50px"
                  />{" "}
                </i>
              </a>
              <a href="https://twitter.com/">
                <i>
                  <img
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/53/bird_1f426.png"
                    alt="twitter"
                    height="50px"
                    width="50px"
                  />
                </i>
              </a>
              <a href="https://www.instagram.com/">
                <i>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                    alt="Instagram"
                    height="50px"
                    width="50px"
                  />
                </i>
              </a>
            </div>
          </div>
          <div className="image-section-1">
            <img
              src="https://static-assets-web.flixcart.com/www/promos/new/20141125-225805-handbag.png"
              alt="background-imag"
            />
          </div>
        </div>
      </div>
    </>
  );
}
