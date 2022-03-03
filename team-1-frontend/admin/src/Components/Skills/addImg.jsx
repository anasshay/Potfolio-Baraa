import React, { Component } from "react";

export class AddImg extends Component {
  render() {
    return (
      <div>
        <label className="skill-upload">
          <span>+ Add Image</span>
          <input
            className="photo-input"
            type="file"
            accept="image/png, image/gif, image/jpeg"
            name="profile-photo"
            onChange={this.props.change}
            required
          />
        </label>
      </div>
    );
  }
}

export default AddImg;
