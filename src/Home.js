import React from "react";
import "./Home.css";
import logo from "./img/logo.png";

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  return (
    <div className="home" id="Home">
      {/* Main section */}
      <div className="home__bg">
        <div className="header">
          <div className="logo">
            <img src={logo} className="logo__main" alt="" />
          </div>
          {/* Mobile navigation */}
          <div className="nav--mobile">
            <input
              type={"checkbox"}
              className="nav--mobile__checkbox"
              id="navi-toggle"
            />
            <label for="navi-toggle" className="nav--mobile__button">
              <span class="nav--mobile__icon"> </span>
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
              <a href="#Home">
                <li className="nav__item mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__item mx__15">About</li>
              </a>
              <a href="#Tech">
                <li className="nav__item mx__15">Tech</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__item mx__15">Portfolio</li>
              </a>
              <a href="#Next">
                <li className="nav__item mx__15">What's next</li>
              </a>
              <a href="#Contact" className="main-cta-btn">
                <li className="nav__item  mx__15">Contact</li>
              </a>
            </ul>
          </div>
        </div>

        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text ">WELCOME TO MY WORLD</h1>
              <h2 className="home__text ">Hi, I’m Alex Munteanu</h2>
              <h3 className="home__text">Aspiring Web Developer</h3>
              <h4 className="home__text ">based in Romania.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
