import React from "react";
import Typed from "react-typed";
import "./header.css";

const Header = () => {
  return (
    <div className="main-info">
      <h1>What am I?</h1>
      <Typed
        strings={[
          "A Full-stack Web Development student",
          "or!",
          "Front-end developer",
          "UX/UI designer",
          "",
          "",
        ]}
        typeSpeed={80}
        backSpeed={20}
        loop
      />
    </div>
  );
};

export default Header;
