/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = {
  main: css({
    margin: 10,
    padding: 10,
    backgroundColor: "#eee",
  }),
};

const DATA = {
  balance: 921.48,
  monthly: 478.33,
  changes: 2.4,
  week: [48.35, 71.63, 18.22, 5.05, 78.94, 56.03, 80.11],
};

function Chart({ weeklyData }) {
  const heightMap = weeklyData;

  return (
    <div className="chart">
      {weeklyData.map((data) => {
        return <div>{data}</div>;
      })}
    </div>
  );
}

function App() {
  // My balance $921.48 Spending - Last 7 days mon tue wed thu fri sat sun Total
  // this month $478.33 +2.4% from last month

  // <div class="attribution">
  //   Challenge by
  //   <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
  //     >Frontend Mentor</a
  //   >. Coded by <a href="#">Your Name Here</a>.
  // </div>
  return <></>;
}

export default App;
