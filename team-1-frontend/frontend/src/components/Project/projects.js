import React, { Component } from "react";
import "./projects.css";
import img from "./images/ahmad.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default class projects extends Component {
  render() {
    // console.log(this.props.projectsProp);

    return (
      <div id="projects">
        <div className="title">
          <h1 className="main-h1">Projects<hr /></h1>
        </div>
        <div className="project-container">
          <div className="all">
            {this.props.projectsProp.map((item, index) => {
              let { imageLink, title, link, description } = item;
              console.log(imageLink, title, link, description);
              return (
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        className="image__img"
                        src={imageLink}
                        alt="ahmad"
                        width="350px"
                        height="350"
                      />
                    </div>
                    <div className="flip-card-back">
                      <a href={link} target="_blank">
                        <FontAwesomeIcon
                          icon={faBars}
                          size="2x"
                          className="icon"
                        />
                        <h1 className="image__title">{title} </h1>
                        <p className="image__description">{description}</p>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
