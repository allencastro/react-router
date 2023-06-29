import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div>
      <div class="header">
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eos
          distinctio amet officia, incidunt modi quo sed. Enim voluptates sunt
          qui voluptatum commodi officia iusto aut cum sequi, quidem reiciendis.
        </p>
      </div>

      <div class="form">
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" id="msg" placeholder="Message" />
        </form>
        <button class="btn" type="button">
          Let's Talk
        </button>
      </div>
    </div>
  );
}

export default Contact;
