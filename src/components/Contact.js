import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section>
      <h2>Contact</h2>
      <p>Looking to colaborate?</p>
      <ol>
        <li>
          <a href="mailto:aprupshri@gmail.com">
            <strong>Email</strong>{" "}
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/aprupshri-s-r/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>LinkedIn</strong>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Aprupshri?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>GitHub</strong>{" "}
          </a>
        </li>
      </ol>
      <p>I'm looking forward to connecting with you!</p>
    </section>
  );
};

export default Contact;
