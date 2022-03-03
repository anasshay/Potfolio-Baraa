import React, { Component } from "react";
import './button.css'
export default class Button extends Component {
  render() {
    return (
      <div className="secrtion-div">
        <a href={this.props.id} className="cta" onClick={this.props.click}>
          <span>{this.props.name}</span>
        </a>
      </div>
    );
  }
}
