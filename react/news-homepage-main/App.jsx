import { useState, useEffect } from "react";
import logo from "./assets/images/logo.svg";
import heroMobile from "./assets/images/image-web-3-mobile.jpg";
import heroDesktop from "./assets/images/image-web-3-desktop.jpg";
import retroPC from "./assets/images/image-retro-pcs.jpg";
import topLaptop from "./assets/images/image-top-laptops.jpg";
import gamingGrowth from "./assets/images/image-gaming-growth.jpg";
import menuIcon from "./assets/images/icon-menu.svg";
import closeIcon from "./assets/images/icon-menu-close.svg";
import "./style.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <>
      <div className={`backdrop ${!isMenuOpen ? "hidden" : ""}`} />
      <header className="header">
        <a href="#">
          <h1>
            <img src={logo} alt="Logo" className="header__logo" />
          </h1>
        </a>
        <nav
          className={`navigation-maximized ${
            !isMenuOpen ? "navigation-hidden" : ""
          }`}
        >
          <button className="button-close" onClick={() => setIsMenuOpen(false)}>
            <img src={closeIcon} alt="close navigation" />
          </button>
          <ul className="header__navigation">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#new">New</a>
            </li>
            <li>
              <a href="#popular">Popular</a>
            </li>
            <li>
              <a href="#trending">Trending</a>
            </li>
            <li>
              <a href="#categories">Categories</a>
            </li>
          </ul>
        </nav>
        <button
          className="navigation-minimized"
          onClick={() => setIsMenuOpen(true)}
        >
          <img src={menuIcon} alt="open navigation" />
        </button>
      </header>
      <main className="main">
        <article className="hero">
          <picture>
            <source
              media="(min-width: 60rem)"
              srcset={heroDesktop}
              alt="featured image"
            />
            <img src={heroMobile} alt="featured image" />
          </picture>
          <h2>The Bright Future of Web 3.0?</h2>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <a href="">Read more</a>
        </article>
        <aside className="aside">
          <h2>New</h2>
          <div className="aside__list">
            <a href="#new1">
              <section>
                <h3>Hydrogen VS Electric Cars</h3>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
              </section>
            </a>
            <a href="#new2">
              <section>
                <h3>The Downsides of AI Artistry</h3>
                <p>
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </p>
              </section>
            </a>
            <a href="new3">
              <section>
                <h3>Is VC Funding Drying Up?</h3>
                <p>
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </p>
              </section>
            </a>
          </div>
        </aside>
        <section className="feed">
          <a href="#feed1">
            <article className="feed__article">
              <img src={retroPC} alt="" />
              <span>01</span>
              <h2>Reviving Retro PCs</h2>
              <p>What happens when old PCs are given modern upgrades?</p>
            </article>
          </a>
          <a href="#feed2">
            <article className="feed__article">
              <img src={topLaptop} alt="" />
              <span>02</span>
              <h2>Top 10 Laptops of 2022</h2>
              <p>Our best picks for various needs and budgets.</p>
            </article>
          </a>
          <a href="#feed3">
            <article className="feed__article">
              <img src={gamingGrowth} alt="" />
              <span>03</span>
              <h2>The Growth of Gaming</h2>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </article>
          </a>
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
