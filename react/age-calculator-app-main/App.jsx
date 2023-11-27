import "./style.css";
import { useState, useRef, useEffect } from "react";
import arrowIcon from "./assets/images/icon-arrow.svg";

const validationOptions = [
  {
    attribute: "required",
    isValid: (input) => {
      return Boolean(input.value);
    },
    errorMessage: (fieldName) => "this field is required",
  },
  {
    attribute: "min",
    isValid: (input) => {
      return parseInt(input.value, 10) >= parseInt(input.min, 10);
    },
    errorMessage: (fieldName) => `must be a valid ${fieldName}`,
  },
  {
    attribute: "max",
    isValid: (input) => {
      return parseInt(input.value, 10) <= parseInt(input.max, 10);
    },
    errorMessage: (fieldName) => `must be a valid ${fieldName}`,
  },
];

function NumberScroller({ endValue }) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (endValue === "--") {
      setCurrentValue("--");
      return;
    }
    const endNumber = parseInt(endValue, 10);
    let animationFrameId;
    const startValue = 0;
    const duration = 500;
    const startTime = performance.now();

    const updateValue = () => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(1, elapsed / duration);
      const nextValue = Math.floor(
        startValue + progress * (endNumber - startValue)
      );

      setCurrentValue(nextValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateValue);
      }
    };

    updateValue();

    return () => cancelAnimationFrame(animationFrameId);
  }, [endValue]);

  return <span className="number-counter">{currentValue}</span>;
}

function App() {
  const dayInputRef = useRef(null);
  const monthInputRef = useRef(null);
  const yearInputRef = useRef(null);
  const [dateError, setDateError] = useState(false);

  const [result, setResult] = useState({
    day: "--",
    month: "--",
    year: "--",
  });
  const [errors, setErrors] = useState({
    day: "",
    month: "",
    year: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setDateError(false);
    setErrors({
      day: "",
      month: "",
      year: "",
    });
    setResult({
      day: "--",
      month: "--",
      year: "--",
    });
    let hasError = false;
    const inputs = {
      day: dayInputRef.current,
      month: monthInputRef.current,
      year: yearInputRef.current,
    };

    Object.entries(inputs).forEach(([key, input]) => {
      for (const option of validationOptions) {
        if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
          setErrors((prev) => ({ ...prev, [key]: option.errorMessage(key) }));
          hasError = true;
          break;
        }
      }
    });

    if (hasError) return;

    const inputDate = new Date(
      inputs.year.value,
      inputs.month.value - 1,
      inputs.day.value
    );

    if (
      inputDate.getFullYear() == inputs.year.value &&
      inputDate.getMonth() == inputs.month.value - 1 &&
      inputDate.getDate() == inputs.day.value
    ) {
      const today = new Date();
      const timeDiff = today - inputDate;

      const yearsDifference = Math.floor(
        timeDiff / (365.25 * 24 * 60 * 60 * 1000)
      );
      const monthsDifference = Math.floor(
        (timeDiff % (365.25 * 24 * 60 * 60 * 1000)) /
          (30.44 * 24 * 60 * 60 * 1000)
      );
      const daysDifference = Math.floor(
        (timeDiff % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
      );
      setResult({
        year: yearsDifference.toString(),
        month: monthsDifference.toString(),
        day: daysDifference.toString(),
      });
    } else {
      setErrors({ day: "Must be a valid date", month: "", year: "" });
      setDateError(true);
    }
  };

  return (
    <main className="card">
      <h1 className="hidden">Age Calculator</h1>
      <form className="card__form" noValidate onSubmit={handleSubmit}>
        <div className="card__input">
          <label
            htmlFor="day"
            className={`input_label ${errors.day && "input_label-error"}`}
          >
            Day
          </label>
          <input
            type="number"
            name="day"
            id="day"
            className={`input_field ${
              (errors.day || dateError) && "input_field-error"
            }`}
            placeholder="DD"
            required
            min={1}
            max={31}
            ref={dayInputRef}
            autoFocus
          />
          <label htmlFor="day" className="input_error">
            {errors.day}
          </label>
          <label
            htmlFor="month"
            className={`input_label ${
              (errors.month || dateError) && "input_label-error"
            }`}
          >
            Month
          </label>
          <input
            type="number"
            name="month"
            id="month"
            className={`input_field ${
              (errors.month || dateError) && "input_field-error"
            }`}
            placeholder="MM"
            required
            min={1}
            max={12}
            ref={monthInputRef}
          />
          <label htmlFor="month" className="input_error">
            {errors.month}
          </label>
          <label
            htmlFor="year"
            className={`input_label ${
              (errors.year || dateError) && "input_label-error"
            }`}
          >
            Year
          </label>
          <input
            type="number"
            name="year"
            id="year"
            className={`input_field ${
              (errors.year || dateError) && "input_field-error"
            }`}
            placeholder="YYYY"
            required
            min={1000}
            max={9999}
            ref={yearInputRef}
          />
          <label htmlFor="year" className="input_error">
            {errors.year}
          </label>
        </div>
        <button className="submit_button" type="submit">
          <span>Submit</span>
          <img src={arrowIcon} alt="submit button" />
        </button>
      </form>
      <time className="card__result">
        <div>
          <NumberScroller endValue={result.year} /> years
        </div>
        <div>
          <NumberScroller endValue={result.month} /> months
        </div>
        <div>
          <NumberScroller endValue={result.day} /> days
        </div>
      </time>
    </main>
  );
}

export default App;
