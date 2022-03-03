import React, { Component } from "react";

export class Button extends Component {
  render() {
    return (
      <div>
        <input name={this.props.name} type="button" className="skill-button" value={this.props.text} onClick={this.props.click} />
      </div>
    );
  }
}

export default Button;
