import React from "react";
import garay from "../img/Garay.png";
import allen from "../img/me.jpg";
import sanchez from "../img/Sanchez.jpg";
import gamboa from "../img/Gamboa.jpg";
import "../styles/About.css";

function About() {
  return (
    <div>
      <h1 class="heading">About Us</h1>
      <img src={garay} alt="cool-garay" className="Garay" />
      <p class="GarayDescription">I am Mark Jason Garay</p>
      <p class="GarayDescription">
        Bachelor of Science in Information Technology
      </p>
      <p class="GarayDescription">UI/UX Designer</p>
      <p class="GarayDescription">Muntinlupa</p>
      <button class="garaybutton">Learn more</button>

      <img src={allen} alt="cool-allen" className="Me" />
      <p class="MyDescription">I am Allen Facundo</p>
      <p class="MyDescription">Bachelor of Science in Information Technology</p>
      <p class="MyDescription">Front&Back End Developer</p>
      <p class="MyDescription">Tunasan</p>
      <button class="mybutton">Learn more</button>

      <img src={sanchez} alt="cool-sanchez" className="Sanchez" />
      <p class="SanchezDescription">I am Romelle Andre Caleb Sanchez</p>
      <p class="SanchezDescription">
        Bachelor of Science in Information Technology
      </p>
      <p class="SanchezDescription">Front&Back End Developer</p>
      <p class="SanchezDescription">Tunasan</p>
      <button class="sanchezbutton">Learn more</button>

      <img src={gamboa} alt="cool-gamboa" className="Gamboa" />
      <p class="GamboaDescription">I am Xedric James Gamboa</p>
      <p class="GamboaDescription">
        Bachelor of Science in Information Technology
      </p>
      <p class="GamboaDescription">Front&Back End Developer</p>
      <p class="GamboaDescription">Sanpedro</p>
      <button class="gamboabutton">Learn more</button>
    </div>
  );
}

export default About;
