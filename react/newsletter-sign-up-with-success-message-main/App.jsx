import "./style.css";
import { useState, useEffect } from "react";
import listIconUrl from "./assets/images/icon-list.svg";
import successIconUrl from "./assets/images/icon-success.svg";

const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const validationTimeout = 400;

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsError(email !== "" && !emailRegex.test(email));
    }, validationTimeout);

    return () => {
      clearTimeout(timeout);
    };
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = !emailRegex.test(email);
    if (error) {
      setIsError(error);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    setIsSubmitted(false);
  };

  const FormCard = (
    <main className="card card-form">
      <header className="card__header" />
      <section className="card__content">
        <h1 className="card__title">Stay updated!</h1>{" "}
        <p className="card__text">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="card__list">
          <li>
            <img src={listIconUrl} alt="checkmark icon" />
            Product discovery and building what matters
          </li>
          <li>
            <img src={listIconUrl} alt="checkmark icon" />
            Measuring to ensure updates are a success
          </li>
          <li>
            <img src={listIconUrl} alt="checkmark icon" />
            And much more!
          </li>
        </ul>
        <form className="card__form">
          <span className="card__input-group">
            <span className="card__label-group">
              <label htmlFor="email">Email address</label>
              <span className={`card__input-error ${!isError && "hidden"}`}>
                Valid email required
              </span>
            </span>
            <input
              type="email"
              name="email"
              id="input-email"
              placeholder="email@company.com"
              className={`card__input ${isError ? "card__input-invalid" : ""}`}
              onChange={handleChange}
            />
          </span>
          <button
            type="button"
            onClick={handleSubmit}
            className="card__submit-button"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </section>
    </main>
  );

  const SuccessCard = (
    <main className="card card-success">
      <section className="card-success__content">
        <img src={successIconUrl} alt="checkmark icon" />
        <h1 className="card__title">Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <b>ash@loremcompany.com</b>.
          Please open it and click the button inside to confirm your
          subscription.
        </p>
      </section>
      <button
        className="card__submit-button"
        type="button"
        onClick={handleClose}
      >
        Dismiss message
      </button>
    </main>
  );

  return isSubmitted ? SuccessCard : FormCard;
}

export default App;
