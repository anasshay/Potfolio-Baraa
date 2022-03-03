import React, { Component } from "react";
import "./aboutme.css";
import axios from "axios";
import img from "../Aboutme/index.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

export default class aboutme extends Component {
  componentDidMount() {
    this.getImage();
  }
  getImage = async () => {
    let imageLink = this.props.aboutMeProp.image;
    imageLink = "http://localhost:2000/" + imageLink;
    console.log(imageLink);
    document.getElementById("p-photo").src = imageLink;
  };

  render() {
    return (
      <div id="about-me" className="about-me-section">
        <div className="title">
          <h1 className="main-h1">
            About Me
            <hr />
          </h1>
        </div>

        <div className="allpart1">
          <div className="descriptionbaraa">
            <h2>Hello, I'm {this.props.aboutMeProp.name}</h2>
            <p>{this.props.aboutMeProp.content}</p>
          </div>

          <div className="imgbaraa">
            <img id="p-photo" src={img} alt="baraa haydar"></img>
          </div>
        </div>

        <div className="arrow-container">
          <div className="before1">
            <FontAwesomeIcon
              className="arrow-icon1"
              icon={faAngleDoubleDown}
              size="3x"
            />
          </div>
          <div className="before2">
            <FontAwesomeIcon
              className="arrow-icon2"
              icon={faAngleDoubleDown}
              size="3x"
            />
          </div>
        </div>
      </div>
    );
  }
}

// {/* <div>
//   <p className="firstp">
//     Studying communications engineering gave me an opportunity to see
//     the world in a different way with all the technologies that we have
//     now. It also helped me build strong problem-solving skills. By my
//     2nd year in college, I realized that my #1 passion is web
//     development.
//   </p>
//   <p className="secondp">
//     Over the past few years, I have learned Angular, ReactJS, Ionic to
//     build some personal and freelance projects. As a developer, I have
//     always felt the desire to learn more and build more.
//   </p>
// </div> */}
