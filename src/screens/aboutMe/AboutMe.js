import React from "react";
import "./aboutMe.css";
import photo from "../../images/warmTone.jpg";

const AboutMe = () => {
  return (
    <div className="about_container" id="about-me">
      <div>
        <img src={photo} alt="person photo" />
      </div>
      <div className="about_text">
        <h1>About Me</h1>
        <p>
          Hello ! I am Altynay Sabitzhan, a Full-Stack Web development student
          at Business College of Helsinki with a background of finance. I mainly
          work with HTML, CSS, UX/UI design, Javascript, and React. I am looking
          for an internship place for this coming May.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
