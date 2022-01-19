import React from "react";
import "./Project.css";
import Project2 from "./img/portfolio-2.jpg";
import Project3 from "./img/portfolio-3.jpg";
import Project4 from "./img/portfolio-4.jpg";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="project__heading">My Latest Projects</h1>
        <p className="project__heading--secondary">
          These are my first individual projects, created to test and improve my
          knowledge
        </p>
      </div>
      <div className="container">
        <div className="project__flex__container">
          <div className="project__flex__item grid__item__1">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">EUNU - Love for Music</h5>
                <h4 className="project__text">DJ/Label Website</h4>
                <a
                  href="https://alexandru-florin-munteanu.github.io/EUNU---Music-DJ-Website-Mockup/"
                  target={"_blank"}
                  className="project__btn"
                >
                  View live demo
                </a>
              </div>
            </div>
          </div>

          <div className="project__flex__item grid__item__2">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Bankist App</h5>
                <h4 className="project__text">Banking App - mock</h4>
                <a
                  href="https://alexandru-florin-munteanu.github.io/bankist-app-js/"
                  target={"_blank"}
                  className="project__btn"
                >
                  View live demo
                </a>
              </div>
            </div>
          </div>

          <div className="project__flex__item grid__item__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Natours</h5>
                <h4 className="project__text">Travel booking website</h4>
                <a
                  href="https://alexandru-natours.netlify.app/#"
                  target={"_blank"}
                  className="project__btn"
                >
                  View live demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
