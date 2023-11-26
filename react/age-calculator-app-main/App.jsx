import "./style.css";

function App() {
  return (
    <main className="card">
      <h1 className="card__title">Age Calculator</h1>
      <form className="card__form">
        <div className="card__input">
          <label htmlFor="day" className="input_label">
            Day
          </label>
          <input
            type="number"
            name="day"
            id="day"
            className="input_field"
            placeholder="DD"
            required
          />
          <label htmlFor="day" className="input_error"></label>
          <label htmlFor="month" className="input_label">
            Month
          </label>
          <input
            type="number"
            name="month"
            id="month"
            className="input_field"
            placeholder="MM"
            required
          />
          <label htmlFor="month" className="input_error"></label>
          <label htmlFor="year" className="input_label">
            Year
          </label>
          <input
            type="number"
            name="year"
            id="year"
            className="input_field"
            placeholder="YYYY"
            required
          />
          <label htmlFor="year" className="input_error"></label>
        </div>
        <button className="submit_button">
          <span>Calculate</span>
          <img src="./assets/images/icon-arrow.svg" alt="submit button" />
        </button>
      </form>
      <time className="card__result">
        <div>
          <span>--</span> years
        </div>
        <div>
          <span>--</span> months
        </div>
        <div>
          <span>--</span> days
        </div>
      </time>
    </main>
  );
}

export default App;
