import React, { Component } from "react";
import "./social.css";
import axios from "axios";
import Button from "../Skills/button";
import MessageDeleted from "../MessageDeleted";
import UpdateItem from "../UpdateItem";
export class SocialMedia extends Component {
  delete = async (id, index) => {
    const res = await axios.delete(`/social-media/${id}`);
    try {
      let message = document.getElementsByClassName(`delete-message${index}`);
      message[0].classList.remove("display-none");
    } catch (error) {
      console.log(error);
    }
  };

  updateContent = async (e) => {
    e.preventDefault();
    let path = "";
    let file = document.getElementsByClassName("media-input1")[0].files["0"];

    const dataFile = new FormData();
    dataFile.append("photo", file);
    const resFile = await axios.post("http://localhost:2000/upload", dataFile);
    try {
      path = resFile.data.path;
      console.log(path);
    } catch (error) {
      console.log(error);
    }

    let link = document.getElementById("text-link").value;
    let data = {
      imageLink: path,
      link: link,
    };
    const res = await axios.post("/social-media", data);
    try {
      if (res.status == 200) {
        document.getElementById(`update_message`).style.display = "block";
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="social-media">
        <h1>Social Media</h1>
        <br />
        <form method="POST" action="/" className="meadia-img1">
          <div className="imgesss">
            {this.props.SocialMediaProp.map((item, index) => {
              return (
                <div key={index}>
                  <input value={item.link} disabled />
                  <input value={item.imageLink} disabled />
                  <Button
                    text="Delete"
                    click={() => {
                      this.delete(item._id, index);
                    }}
                  />
                  <div className={`display-none delete-message${index}`}>
                    <MessageDeleted />
                  </div>
                </div>
              );
            })}
          </div>
        </form>

        <form method="POST" action="/" className="meadia-img1">
          <input
            type="file"
            className="media-input1"
            accept="/png"
            name="project-photo"
            required
          />
          <input id="text-link" type="text" placeholder="Link" required />
          <br />
          <Button text="Add" click={this.updateContent} />
          <div id={`update_message`} style={{ display: "none" }}>
            <UpdateItem />
          </div>
        </form>
      </div>
    );
  }
}

export default SocialMedia;
