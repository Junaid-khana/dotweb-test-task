import React from "react";
import { Alert } from "../alert";
import { Footer } from "../footer";

export const CheckListEn = ({ isAlertVisible }) => {
  return (
    <div className={`body-container ${!isAlertVisible && "add-space"}`}>
      <div>{isAlertVisible && <Alert />}</div>
      <div
        className={`${
          isAlertVisible ? "top-space" : "add-space"
        } check-continer`}
      >
        <div className="check-left">
          <div className="check-left-top">
            <div className="check-leftTop-left">
              <div>
                <img src="/images/topLeft.png" />
              </div>
              <div>
                <img src="/images/dotweb.png" />
              </div>
            </div>
            <div className="video-topSection">
              <div className="check-leftTop-Right">
                <div>
                  <img src="/images/midRight1.png" />
                </div>
                <div>
                  <img src="/images/midRight.png" />
                </div>
              </div>
              <div className="check-video">
                <div className="video-container">
                  <video width="100%" height="256" id="video" autoPlay controls>
                    <source
                      src="https://www.w3schools.com/html/mov_bbb.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="overlay">
                    <button className="overlay-button">Nesting</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="check-left-bottom">
            <div className="check-leftBottom-left">
              <blockquote>
                <p>
                  The only limit to our realization of tomorrow is our doubts of
                  today.
                </p>
                <footer>— Franklin D. Roosevelt</footer>
              </blockquote>
            </div>
            <div className="check-leftBottom-right">
              <img src="/images/bottomMid.png" />
            </div>
          </div>
        </div>
        <div className="check-right">
          <div className="check-right-top">
            <article>
              <h2>IMMO Trust</h2>
              <p>This is a text block within an article.</p>
            </article>
          </div>
          <div className="check-right-bottom">
            {" "}
            <img src="/images/bottomRight.png" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
