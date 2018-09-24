import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
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
                About
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

        {/* <p className="App-intro">Under construction!</p> */}
      </div>
    );
  }
}

export default App;
