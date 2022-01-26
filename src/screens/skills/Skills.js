import React from "react";
import "./skills.css";
import DevIcon from "devicon-react-svg";
import { skills } from "../../helpers/skills";
const Skills = () => {
  return (
    <div className="skills_container" id="skills">
      <div>
        <h1 style={{ textAlign: "center" }}>Skills</h1>
      </div>
      <div className="skills_cards_container">
        {skills.map((e, idx) => {
          return (
            <div key={idx} className="skills_card">
              <DevIcon className="tech_icons" icon={e.iconName} />
              <span style={{ margin: "5px", fontSize: "1.5rem" }}>
                {e.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
