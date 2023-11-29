import { InputHTMLAttributes, useState } from "react";
// @ts-ignore
import checkMark from "./assets/icon-complete.svg";
// @ts-ignore
import cardLogo from "./assets/card-logo.svg";
import "./style.css";

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  isValid?: boolean;
  errorMessage?: string;
  className?: string;
  label?: string;
}

const IS_INVALID = {
  name: (input: string) => {
    if (input.trim().length < 1) return "can't be blank";
    return false;
  },
  number: (input: string) => {
    if (input.trim().length < 0) return "can't be blank";
    if (input.trim().replace(/\D/g, "").length !== 16)
      return "please enter a 16 digit number";
    return false;
  },
  month: (input: string) => {
    if (input.trim().length < 0) return "can't be blank";
    if (input.trim().replace(/\D/g, "").length !== 2)
      return "please enter a 2 digit number";
    if (parseInt(input.trim(), 10) < 1 || parseInt(input.trim(), 10) > 12)
      return "please enter a valid month";
    return false;
  },
  year: (input: string) => {
    if (input.trim().length < 0) return "can't be blank";
    if (input.trim().replace(/\D/g, "").length !== 2)
      return "please enter a 2 digit number";
    return false;
  },
  cvc: (input: string) => {
    if (input.trim().length < 0) return "can't be blank";
    if (input.trim().replace(/\D/g, "").length !== 3)
      return "please enter a 3 digit number";
    return false;
  },
};

const REPLACE = {
  name: (input: string) => input,
  number: (input: string) =>
    input
      .replace(/\D/g, "")
      .substring(0, 16)
      .match(/.{1,4}/g)
      ?.join(" ") || "",
  month: (input: string) => input.replace(/\D/g, "").substring(0, 2),
  year: (input: string) => input.replace(/\D/g, "").substring(0, 2),
  cvc: (input: string) => input.replace(/\D/g, "").substring(0, 3),
};

function InputGroup({
  className,
  name,
  isValid = true,
  label,
  errorMessage,
  value,
  onChange,
  ...props
}: InputGroupProps) {
  return (
    <div className={`input_group ${className}`}>
      {label && (
        <label htmlFor={name} className="input_group__label">
          {label}
        </label>
      )}
      <input
        type="string"
        name={name}
        id={`#${name}`}
        {...props}
        className={`input_group__input ${
          !isValid ? "input_group__input-error" : ""
        }`}
        value={value}
        onChange={onChange}
        required
      />
      <label htmlFor={name} className="input_group__error">
        {!isValid ? errorMessage : ""}
      </label>
    </div>
  );
}

function App() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });
  const [formError, setFormError] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const inputElement = e.currentTarget as HTMLInputElement;

    setFormData((prev) => ({
      ...prev,
      // @ts-ignore
      [inputElement.name]: REPLACE[inputElement.name](inputElement.value) || "",
    }));
  }

  function validateForm() {
    setFormError({
      name: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    });
    let isValid = true;

    Object.entries(formData).forEach(([key, input]) => {
      // @ts-ignore
      const hasError = IS_INVALID[key](input);
      if (hasError) {
        setFormError((prev) => ({ ...prev, [key]: hasError }));
        isValid = false;
      }
    });

    return isValid;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setHasSubmitted(validateForm());
  }

  return (
    <main className="main">
      <div className="backdrop">
        <div className="card card-background">
          <span className="card__ccv">{formData.cvc || "123"}</span>
        </div>
        <div className="card card-foreground">
          <img src={cardLogo} alt="card logo" className="card__logo" />
          <span className="card__number">
            {formData.number || "1234 5678 9123 0000"}
          </span>
          <span className="card__name">
            {formData.name || "Jane Appleseed"}
          </span>
          <span className="card__expiry">
            {formData.month || "MM"}/{formData.year || "YY"}
          </span>
        </div>
      </div>
      <div className="main__form_wrapper">
        {hasSubmitted ? (
          <div className="form-submitted">
            <img src={checkMark} alt="check mark" />
            <h1>THANK YOU!</h1>
            <p>We've added your card details</p>
            <button onClick={() => setHasSubmitted(false)}>Continue</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form" noValidate>
            <InputGroup
              name="name"
              placeholder="e.g. Jane Appleseed"
              label="cardholder name"
              errorMessage={formError.name}
              value={formData.name}
              onChange={handleChange}
              isValid={!Boolean(formError.name)}
            />
            <InputGroup
              pattern="\d*"
              name="number"
              placeholder="e.g. 1234 5678 9123 0000"
              label="card number"
              value={formData.number}
              onChange={handleChange}
              errorMessage={formError.number}
              isValid={!Boolean(formError.number)}
            />
            <div className="input_group-2_columns">
              <div className="input_group">
                <label htmlFor="month" className="input_group__label">
                  exp. date (mm/yy)
                </label>
                <div className="input_group-2_columns">
                  <InputGroup
                    name="month"
                    pattern="\d*"
                    placeholder="MM"
                    value={formData.month}
                    onChange={handleChange}
                    errorMessage={formError.month}
                    isValid={!Boolean(formError.month)}
                  />
                  <InputGroup
                    name="year"
                    pattern="\d*"
                    placeholder="YY"
                    value={formData.year}
                    onChange={handleChange}
                    errorMessage={formError.year}
                    isValid={!Boolean(formError.year)}
                  />
                </div>
              </div>
              <InputGroup
                name="cvc"
                pattern="\d*"
                placeholder="e.g. 123"
                label="cvc"
                value={formData.cvc}
                onChange={handleChange}
                errorMessage={formError.cvc}
                isValid={!Boolean(formError.cvc)}
              />
            </div>
            <button type="submit" className="form__button-submit">
              Confirm
            </button>
          </form>
        )}
      </div>
    </main>
  );
}

export default App;
