import React, { Component } from "react";
import "./skill.css";
import img from "./img.jpeg";

export default class Skill extends Component {
  render() {
    // console.log(this.props.skillsProp);
    return (
      <div id="skills">
        <h1 className="skill-h1 main-h1">
          Skills
          <hr />
        </h1>
        <form className="skills-box" action="/">
          <div className="skills-container">
            {this.props.skillsProp.map((item, index) => {
              return (
                <div key={index} className="skill">
                  <label className="skill-label">
                    <h3 className="skill-header">
                      {item.title}
                    </h3>
                    <img src={item.imagelink} className="skill-img" alt="" />
                  </label>
                </div>
              );
            })}
          </div>
        </form>
      </div>
    );
  }
}
