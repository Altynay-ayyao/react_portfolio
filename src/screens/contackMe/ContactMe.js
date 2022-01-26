import React from "react";
import "./contactMe.css";
import { navigationLinks } from "../../helpers/navigationLinks";

const createLinks = () => {
  return navigationLinks.map((e, idx) => (
    <p key={idx}>
      <a href={e.ref}> {e.name}</a>
    </p>
  ));
};

const ContactMe = () => {
  return (
    <div className="contactMe__container" id="contact">
      <div className="contactMe__data__links">
        <div>
          <p>Helsinki</p>
          <p>Altynay Sabitzhan</p>
          <p>atenai875@gmail.com</p>
        </div>
        <div>{createLinks()}</div>
      </div>
      <div style={{ textAlign: "center" }}>
        Copyright&copy;{new Date().getFullYear()}
      </div>
    </div>
  );
};

export default ContactMe;
