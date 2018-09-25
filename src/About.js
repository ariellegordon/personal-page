import React, { Component } from "react";
import "./About.css";
import personalPhoto from "./personal-photo.jpeg";

class About extends Component {
  constructor() {
    super();
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }
  handleMouseOver() {
    let route1 = document.querySelector("#route1");
    let route2 = document.querySelector("#route2");
    let route3 = document.querySelector("#route3");
    [route1, route2, route3].forEach(elem => elem.classList.remove("visible"));
  }
  render() {
    return (
      <div className="About-page" onMouseOver={this.handleMouseOver}>
        <div className="About-container">
          <div className="personal-photo">
            <img src={personalPhoto} className="responsive" />
            <figcaption>Wearing many hats at SXSW 2018</figcaption>
          </div>
          <div className="About-text">
            <h3>About</h3>
            <p>
              Arielle is a software engineer living in Brooklyn, New York. When
              she's not helping students learn full-stack JavaScript at Grace
              Hopper, she is most likely writing about music.
            </p>
            <h3>Published work</h3>
            <div className="publication">
              <div>
                <p>
                  <strong>Spin</strong>
                </p>
                <div className="published-work">
                  <a href="https://www.spin.com/2018/06/snail-mail-lush-review/">
                    Review: Snail Mail, <em>Lush</em>
                  </a>
                  <a href="https://www.spin.com/2018/05/dj-koze-knock-knock-review/">
                    Review: DJ Koze, <em>Knock Knock</em>
                  </a>
                  <a href="https://www.spin.com/2018/04/hop-along-bark-your-head-off-dog-review/">
                    Review: Hop Along, <em>Bark Your Head Off, Dog</em>
                  </a>
                  <a href="https://www.spin.com/2018/03/ed-schraders-music-beats-riddles-album-review/">
                    Review: Ed Schrader's Music Beat, <em>Riddles</em>
                  </a>
                  <a href="https://www.spin.com/2018/01/fall-out-boy-wilson-expensive-mistakes-track-review/">
                    Track Review: Fall Out Boy, "Wilson (Expensive Mistakes)"
                  </a>
                  <a href="https://www.spin.com/2018/01/superchunk-erasure-track-review/">
                    Track Review: Superchunk, "Erasure"
                  </a>
                  <a href="https://www.spin.com/2017/11/fever-ray-plunge-review/">
                    Review: Fever Ray, <em>Plunge</em>
                  </a>
                  <a href="https://www.spin.com/2017/10/weezer-pacific-daydream-review/">
                    Review: Weezer, <em>Pacific Daydream</em>
                  </a>
                </div>
              </div>
              <div>
                <p>
                  <strong>Resident Advisor</strong>
                </p>
                <div className="published-work">
                  <a href="https://www.residentadvisor.net/reviews/23059">
                    Review: Paradise Garage Reunion
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
