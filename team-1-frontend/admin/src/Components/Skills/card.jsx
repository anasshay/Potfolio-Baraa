import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div>
        <div className="skill">
          <label className="skill-label">
            <h3 className="skill-header">{this.props.name}</h3>
            <img
              src={this.props.img}
              className="skill-img"
              alt=""
            />
          </label>
        </div>
      </div>
    );
  }
}

export default Card;
