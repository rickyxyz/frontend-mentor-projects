import logo from "./images/logo.svg";

const DATA = {
  balance: 921.48,
  monthly: 478.33,
  changes: 2.4,
  week: [48.35, 71.63, 18.22, 5.05, 78.94, 56.03, 80.11],
};
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

function Chart({ weeklyData }) {
  const _max = Math.max(...weeklyData);
  const heightMap = weeklyData.map((data) => data / _max);
  const today = Math.max(0, new Date().getDay() - 1);

  return (
    <div className="chart">
      {heightMap.map((data, i) => {
        return (
          <div key={`bar-${i}-${data}`} className="chart__bar_wrapper">
            <div className="chart__bar_label">${weeklyData[i]}</div>
            <div
              className={`chart__bar ${i == today ? "chart__bar-today" : ""}`}
              style={{ height: `calc(calc(100% - 2.5rem) * ${data})` }}
            />
            <span className="chart__bar_legend">{weekdays[i]}</span>
          </div>
        );
      })}
    </div>
  );
}

function App() {
  return (
    <>
      <header className="header">
        <div className="header__text">
          <h2>My balance</h2>
          <span>$921.48</span>
        </div>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <section className="section-graph">
          <h1 className="main__header">Spending - Last 7 days</h1>
          <Chart weeklyData={DATA.week} />
        </section>
        <hr />
        <section className="section-2_columns main__total">
          <h2>Total this month</h2>
          <span className="main__total__total">
            ${DATA.week.reduce((total, val) => total + val, 0).toFixed(2)}
          </span>
          <div className="main__total__changes">
            <span>+2.4%</span>
            <p>from last month</p>
          </div>
        </section>
      </main>
      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/rickyxyz">@rickyxyz</a>.
      </footer>
    </>
  );
}

export default App;
