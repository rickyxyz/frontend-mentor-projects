import "./style.css";

function App() {
  return (
    <>
      <main className="main">
        <header className="header">
          <h1>
            <img src="./assets/images/logo.svg" alt="Logo" />
          </h1>
          <nav>
            <ul className="header__navigation">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">New</a>
              </li>
              <li>
                <a href="">Popular</a>
              </li>
              <li>
                <a href="">Trending</a>
              </li>
              <li>
                <a href="">Categories</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="hero">
          <article>
            <img src="./assets/images/image-web-3-desktop.jpg" alt="" />
            <h2>The Bright Future of Web 3.0?</h2>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <a href="">Read more</a>
          </article>
        </section>
        <section className="aside">
          <article>
            <span>01</span>
            <h1>Reviving Retro PCs</h1> What happens when old PCs are given
            modern upgrades?
          </article>
          <article>
            <span>02</span>
            <h1>Top 10 Laptops of 2022</h1> Our best picks for various needs and
            budgets.
          </article>
          <article>
            <span>03</span>
            <h1>The Growth of Gaming</h1> How the pandemic has sparked fresh
            opportunities.
          </article>
        </section>
        <aside className="feed">
          <img src="./assets/images/image-retro-pcs.jpg" alt="" />
          <h1>New</h1>
          <section>
            <h2>Hydrogen VS Electric Cars</h2>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </section>
          <section>
            <img src="./assets/images/image-top-laptops.jpg" alt="" />
            <h2>The Downsides of AI Artistry</h2>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </section>
          <section>
            <img src="./assets/images/image-gaming-growth.jpg" alt="" />
            <h2>Is VC Funding Drying Up?</h2>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </section>
        </aside>
      </main>
      {/* <footer className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </footer> */}
    </>
  );
}

export default App;
