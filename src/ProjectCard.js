import React, { Component } from "react";
import "./Project.css";

const ProjectCard = props => {
  const { project } = props;
  return (
    <div className="project-card">
      <div className="project-inner">
        <div>
          <a href={project.link}>
            <h2>{project.name}</h2>
          </a>
          <p>{project.description}</p>
        </div>
        <a href={project.link}>
          <img src={project.image} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
