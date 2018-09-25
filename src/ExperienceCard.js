import React, { Component } from "react";
import "./Experience.css";

const ExperienceCard = props => {
  const { experience } = props;
  return (
    <div key={experience.name}>
      <h2>{experience.name}</h2>
      <h3>{experience.title}</h3>
      <p>{experience.years}</p>
      <ul>
        {experience.description.map(desc => (
          <li key={desc.slice(5)}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
