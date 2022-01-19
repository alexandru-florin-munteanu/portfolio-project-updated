import React from "react";

const Form = () => {
  return (
    <div>
      <div className="book">
        <div className="book__form">
          <form action="#" className="form">
            <div className="u-margin-bottom-medium">
              <h2 className="heading-secondary">Contact me</h2>
            </div>
            <div className="form__group">
              <input
                type="text"
                id="name"
                className="form__input"
                placeholder="Full Name"
                required
              />
              <label for="name" className="form__label">
                Full name
              </label>
            </div>
            <div className="form__group">
              <input
                type="email"
                id="email"
                className="form__input"
                placeholder="Email address"
                required
              />
              <label for="email" className="form__label">
                {" "}
                Email address
              </label>
            </div>

            <div className="form__group u-margin-bottom-medium">
              <div className="form__radio-group">
                <input
                  type="radio"
                  id="small"
                  className="form__radio-input"
                  name="size"
                />
                <label for="small" className="form__radio-label">
                  <span className="form__radio-button"></span>
                  Small tour group
                </label>
              </div>
              <div className="form__radio-group">
                <input
                  type="radio"
                  id="large"
                  className="form__radio-input"
                  name="size"
                />
                <label for="large" className="form__radio-label">
                  <span className="form__radio-button"></span>
                  Large tour group
                </label>
              </div>
            </div>

            <div className="form__group">
              <button className="btn btn--green">Next Step &rarr;</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
