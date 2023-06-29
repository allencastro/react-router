import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import pic1 from "../img/GodofTurbo.jpg";
import pic2 from "../img/AIman.jpg";
import pic3 from "../img/wticher3.jpg";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div>
      <section className="showcase">
        <h1 className="showcase_heading">WELCOME TO FEWGAMES</h1>
        <h2 className="showcase_subheading">
          Online multiplayer Video gaming site, Where you can connect to other
          people all around the world!
        </h2>
        <button className="showcase_cta" onClick={handleRegisterClick}>
          Join Us
        </button>
      </section>
      <div className="container">
        <h1 className="greeting">Released Games</h1>
        <div className="content">
          <div className="content_item">
          <img src={pic1} />
            <div className="info">
              <h1 className="heading">Chronicles of Elysium</h1>
              <p>
                is an action-packed adventure game where you engage in thrilling
                combat against formidable creatures using fluid swordplay,
                powerful magic, and strategic skills. Master devastating combos,
                unlock spells, and conquer challenging enemies in an immersive
                world of action and exploration.
              </p>
            </div>
          </div>
          <div className="content_item">
          <img src={pic2} />
            <div className="info">
              <h1 className="heading">The Enigma of Eternity</h1>
              <p>
                offers breathtaking graphics that breathe life into different
                eras, complemented by an immersive soundtrack that enhances the
                atmosphere and enriches the gameplay.
              </p>
            </div>
          </div>
          <div className="content_item">
          <img src={pic3} />
            <div className="info">
              <h1 className="heading">The Witcher 3: Wild Hunt</h1>
              <p>
                is a 2015 action role-playing game developed and published by CD
                Projekt. It is the sequel to the 2011 game The Witcher 2:
                Assassins of Kings and the third game in The Witcher video game
                series, played in an open world with a third-person perspective.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
