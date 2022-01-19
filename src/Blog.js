import React from "react";
import "./Blog.css";
import Blog1 from "./img/blog-01.jpg";
import Blog2 from "./img/blog-02.jpg";
import Blog3 from "./img/blog-03.jpg";

function Blog() {
  return (
    <div className="blog component__space" id="Next">
      <div className="blog__heading">
        <h1 className="blog__heading--primary">Latest News</h1>
        <p className="blog__heading--secondary">
          My upcoming and ongoing projects.
        </p>
      </div>
      <div className="container">
        <div className="blog__container">
          <div className="blog__item">
            <div className="project__box pointer relative">
              <div className="blog__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Food and Nutrition App</h5>
                <h4 className="project__text">Currently planning.</h4>
                <a href="#Home" className="blog project__btn btn">
                  Coming soon
                </a>
              </div>
            </div>
          </div>

          <div className="blog__item">
            <div className="project__box pointer relative">
              <div className="blog__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Bankist Website</h5>
                <h4 className="project__text">Adding new features </h4>
                <a
                  href="https://alexandru-florin-munteanu.github.io/bankist-website/"
                  target={"_blank"}
                  className="blog project__btn btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="blog__item">
            <div className="project__box pointer relative">
              <div className="blog__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Transylvania 6 Days</h5>
                <h4 className="project__text">Currently working on.</h4>
                <a
                  href="https://alexandru-florin-munteanu.github.io/transylvania-six-days/"
                  target={"_blank"}
                  className="blog project__btn btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
