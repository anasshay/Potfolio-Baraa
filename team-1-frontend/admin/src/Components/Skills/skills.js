import React, { Component } from "react";
import "./Skills.css";
import AddImg from "./addImg";
import Button from "./button";
import Card from "./card";
import axios from "axios";
import MessageDeleted from "../MessageDeleted";

export class Skills extends Component {
  delete = async (id, index) => {
    const res = await axios.delete(`/skills/${id}`);
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
    let file = document.getElementsByClassName("photo-input")[0].files["0"];

    const dataFile = new FormData();
    dataFile.append("photo", file);
    const resFile = await axios.post("http://localhost:2000/upload", dataFile);
    try {
      path = resFile.data.path;
      // console.log(path);
    } catch (error) {
      console.log(error);
    }

    let title = document.getElementById("skillsTitle").value;
    let data = {
      imagelink: path,
      title: title,
    };
    const res = await axios.post("/skills", data);
    try {
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log(this.props.skillsProps);
    return (
      <div className="skills">
        <div>
          <form className="skills-box" action="/">
            <div className="skills-container">
              {this.props.skillsProps.map((item, index) => {
                return (
                  <div>
                    <Card key={index} name={item.title} img={item.imagelink} />
                    <Button
                      text="delete"
                      click={() => this.delete(item._id, index)}
                    />
                    <div className={`display-none delete-message${index}`}>
                      <MessageDeleted />
                    </div>
                  </div>
                );
              })}
            </div>
          </form>
          <form method="POST" action="/" enctype="multipart/form-data">
            <div>
              <div className="skill-add">
                <AddImg />
                <input
                  type="text"
                  id="skillsTitle"
                  className="skill-input"
                  placeholder="ADD Skills"
                />
                <Button text="Add" click={this.updateContent} />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Skills;
