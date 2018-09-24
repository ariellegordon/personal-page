import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
class Header extends Component {
  constructor() {
    super();
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }
  handleMouseOver() {
    let routes = document.querySelector("#route-inner");
    routes.classList.toggle("visible");
  }
  render() {
    return (
      <div className="Header-Container" onMouseOver={this.handleMouseOver}>
        <div className="App-container" id="myHeader">
          <div className="info-container">
            <h1 id="pinky">Arielle Gordon</h1>
          </div>

          <div className="contact-info">
            <h3 id="desc" className="contact">
              Software Engineer
            </h3>

            <div className="contact-inner" id="contact-inner">
              <h3 className="contact">
                <a href="mailto:ariellelindsaygordon@gmail.com" target="_blank">
                  Email
                </a>
              </h3>
              <h3 className="contact">
                <a
                  href="https://www.linkedin.com/in/ariellegordon/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </h3>
              <h3 className="contact">
                <a href="https://github.com/ariellegordon" target="_blank">
                  GitHub
                </a>
              </h3>
            </div>
            <div className="contact-inner" id="route-inner">
              <div className="contact" id="routes">
                <Link to="/about">About</Link>
              </div>
              <div className="contact" id="routes">
                Projects
              </div>
              <div className="contact" id="routes">
                Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
