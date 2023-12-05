import React from "react";
import "./style.css";
import databiz from "./images/client-databiz.svg";
import audiophile from "./images/client-audiophile.svg";
import meet from "./images/client-meet.svg";
import maker from "./images/client-maker.svg";

function App() {
  return (
    <main className="main">
      <div className="main__banner" />
      <div className="main__content">
        <div className="main__text">
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
        </div>
        <button className="button-filled">Learn more</button>
        <div className="main__testimonials">
          <img src={databiz} alt="databiz" />
          <img
            src={audiophile}
            alt="audiophile"
            className="main__testimonials-audiophile"
          />
          <img src={meet} alt="meet" />
          <img src={maker} alt="maker" />
        </div>
      </div>
    </main>
  );
}

export default App;
