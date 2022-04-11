import React from "react";
import "./Home.css";
import logo from "./img/logo.png";
import macaron from "./img/macaron-svgrepo-com.svg";
import Video from "./img/bg-video.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faTheaterMasks } from "@fortawesome/free-solid-svg-icons";

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  return (
    <div className="home" id="Home">
      {/* Main section */}
      <div className="video__bg">
        <video autoPlay loop muted src={Video} type="video/mp4"></video>
      </div>
      <div className="home__container">
        <div className="header">
          <div className="logo">
            <img src={macaron} className="logo__main" alt="" />
          </div>
          {/* Mobile navigation */}
          <div className="nav--mobile">
            <input
              type={"checkbox"}
              className="nav--mobile__checkbox"
              id="navi-toggle"
            />
            <label htmlFor="navi-toggle" className="nav--mobile__button">
              <span className="nav--mobile__icon"> </span>
            </label>

            <div className="nav--mobile__background">&nbsp;</div>

            <nav className="nav--mobile__nav">
              <ul className="nav--mobile__list">
                <li className="nav--mobile__item">
                  <a href="#Home" class="nav--mobile__link">
                    <span>01</span> HOME
                  </a>
                </li>
                <li className="nav--mobile__item">
                  <a href="#About" class="nav--mobile__link">
                    <span>02</span> ABOUT
                  </a>
                </li>
                <li className="nav--mobile__item">
                  <a href="#Tech" class="nav--mobile__link">
                    <span>03</span> TECH
                  </a>
                </li>
                <li className="nav--mobile__item">
                  <a href="#Portfolio" class="nav--mobile__link">
                    <span>04</span> PORTFOLIO
                  </a>
                </li>
                <li className="nav--mobile__item">
                  <a href="#Next" class="nav--mobile__link">
                    <span>05</span>WHAT'S NEXT
                  </a>
                </li>
                <li className="nav--mobile__item">
                  <a href="#Contact" class="nav--mobile__link">
                    <span>06</span> CONTACT
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="navigation">
            <ul className="navigation__navbar">
              <li className="nav__item">
                <a href="#Home">Home</a>
              </li>
              <li className="nav__item">
                <a href="#About">About</a>
              </li>
              <li className="nav__item">
                <a href="#Tech">Tech</a>
              </li>
              <li className="nav__item">
                <a href="#Portfolio">Projects</a>
              </li>
              <li className="nav__item">
                <a href="#Next">Roadmap</a>
              </li>
            </ul>
          </div>
          <div className="main--cta__container">
            <a href="#Contact" className="main-cta-btn">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </a>
          </div>
        </div>

        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text ">WELCOME TO MY WORLD</h1>
              <h2 className="home__text ">Hi, I’m Alex Munteanu</h2>
              <h3 className="home__text"> Web Developer</h3>
            </div>
          </div>

          <ul className="social">
            <li>
              <a href="#Home">
                <FontAwesomeIcon icon={faTheaterMasks}></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href="#Home">
                <FontAwesomeIcon icon={faTheaterMasks}></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href="#Home">
                <FontAwesomeIcon icon={faTheaterMasks}></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href="#Home">
                <FontAwesomeIcon icon={faTheaterMasks}></FontAwesomeIcon>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V49.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,25.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>

          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Home;
