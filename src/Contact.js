import React, { useRef, useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <p>Your message has been successfully sent. I will contact you soon</p>
  );
};

function Contact() {
  const form = document.querySelector("form");
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tgur5wv",
        "template_aio7gll",
        form,
        "user_6dgw4vtB8OD69f7hgAllu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  // Hide result
  setTimeout(() => {
    showResult(false);
    formData.username = "";
    formData.email = "";
    formData.phone = "";
    formData.message = "";
  }, 5000);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  return (
    <div className="contact  component__space" id="Contact">
      <span className="big-circle"></span>
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>

          <div className="info">
            <div className="information">
              <div className="icon-contact">
                <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>
              </div>
              <p> Strada Burebista, nr. 13, Cluj-Napoca</p>
            </div>
            <div className="information">
              <div className="icon-contact">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </div>
              <p> alexandru.mpjs@gmail.com</p>
            </div>
            <div className="information">
              <div className="icon-contact">
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              </div>
              <p>+40 762 577 392</p>
            </div>
          </div>
          <div className="social-media">
            <p>Connect with me:</p>
            <div className="social-icons">
              <div className="social-icon-github">
                <a
                  href="https://github.com/alexandru-florin-munteanu"
                  className="social-icon__link"
                  target={"_blank"}
                ></a>
              </div>
              <div className="social-icon-slack">
                <a
                  href="#Contact"
                  className="social-icon__link"
                  target={"_blank"}
                ></a>
              </div>

              <div className="social-icon-linkedin">
                <a
                  href="https://www.linkedin.com/in/alexandru-munteanu-4b4810225/"
                  className="social-icon__link"
                  target={"_blank"}
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form className="main-form" onSubmit={sendEmail}>
            <h3 className="title">Contact me</h3>
            <div className="input-container ">
              <input
                type={"text"}
                name="username"
                className="input main-form-input"
                autoComplete="off"
                placeholder=""
                value={formData.username}
                onChange={(event) =>
                  setFormData({ ...formData, username: event.target.value })
                }
              ></input>
              <label className="main-label" for="">
                Username
              </label>
            </div>
            <div className="input-container">
              <input
                type={"email"}
                name="email"
                className="input main-form-input"
                placeholder=""
                value={formData.email}
                onChange={(event) =>
                  setFormData({ ...formData, email: event.target.value })
                }
              ></input>
              <label className="main-label" for="">
                Email
              </label>
            </div>
            <div className="input-container">
              <input
                type={"tel"}
                name="phone"
                placeholder=""
                className="input main-form-input"
                value={formData.phone}
                onChange={(event) =>
                  setFormData({ ...formData, phone: event.target.value })
                }
              ></input>
              <label className="main-label" for="">
                Phone
              </label>
            </div>
            <div className="input-container textarea">
              <textarea
                name="message"
                className="input main-form-input"
                value={formData.message}
                onChange={(event) =>
                  setFormData({ ...formData, message: event.target.value })
                }
              ></textarea>
            </div>
            <input type="submit" value="Send" className="main-form-btn"></input>
            <div className="row">{result ? <Result /> : null}</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
