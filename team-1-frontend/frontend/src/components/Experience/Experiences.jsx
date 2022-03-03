import React, { Component } from "react";
import Experience from "./Experience";
import "./experience.css";

export default class Experiences extends Component {
  render() {
    return (
      <div id="experiences" className="experiences">
        <h1 className="main-h1">
          Experiences
          <hr />
        </h1>
        <Experience experienceProp={this.props.experienceProp} />
      </div>
    );
  }
}
