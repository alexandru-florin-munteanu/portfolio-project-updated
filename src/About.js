import React from "react";
import "./About.css";
import aboutImg from "./img/about-1.jpg";

function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="about__container">
        <div className="about__wraper">
          <div className="about__img">
            <img src={aboutImg} alt="my photo" className="about__img" />
          </div>
          <div className="about__txt">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                I am a passionate and dedicated self-taught person, aspiring to
                become a frontend developer / engineer. Currently undergoing
                assignments and tasks from a mid software-engineer at Code
                Frequency.
              </p>
              <p className="about__text p__color">
                Currently looking for an internship or beginner friendly role
                within the industry, looking to join the right culture for a
                mutual win. This is my portofolio.
              </p>
              <div className="about__button d__flex align__items__center">
                <a target={"_blank"} href="https://files.fm/f/wsx5ayw2e">
                  <button className="about__button__secondary-cta">
                    Download Cv
                  </button>
                </a>
                <a
                  target={"_blank"}
                  href="https://github.com/alexandru-florin-munteanu?tab=repositories"
                >
                  <button className="about__button__main-cta">View Work</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
