import React, { Component } from "react";
import AddImg from "../Skills/addImg";
import Button from "../Skills/button";
import "./project.css";
import axios from "axios";
import UpdateItem from "../UpdateItem";
import MessageDeleted from "../MessageDeleted";
export class Projects extends Component {
  updateContent = async (e) => {
    e.preventDefault();
    let projectLink = document.getElementById("projectLink");
    let projectTitle = document.getElementById("projectTitle");
    let projectDescription = document.getElementById("projectDescription");
    let path = "";
    const dataFile = new FormData();
    dataFile.append("photo", this.state.fileData);
    const resFile = await axios.post("http://localhost:2000/upload", dataFile);
    try {
      path = resFile.data.path;
      console.log(path);
    } catch (error) {
      console.log(error);
    }
    let data = {
      imageLink: path,
      title: projectTitle.value,
      link: projectLink.value,
      description: projectDescription.value,
    };
    const res = await axios.post("/projects", data);
    try {
      if (res.status == 200) {
        document.getElementById('add_message').style.display = "block"
      };
    } catch (error) {
      console.log(error);
    }
  };

  fileChangeHandler = () => {
    let inputField =
      document.getElementsByClassName("photo-input")[0].files["0"];
    this.setState({
      fileData: inputField,
    });
  };

  edit = (index) => {
    let button = document.querySelector(".C" + index);
    let edits = document.querySelectorAll(`.edit-inputs${index}`);
    edits.forEach((item) => {
      item.style.display = "block";
    });
    button.style.display = "block";
    return;
  };
  delete = async (id, index) => {
    const res = await axios.delete(`/projects/${id}`);
    try {
      document
        .getElementsByClassName(`delete-message${index}`)[0]
        .classList.remove("display-none");
    } catch (error) {
      console.log(error);
    }
  };
  save = async (id, index) => {
    let button = document.querySelector(".C" + index);
    let edits = document.querySelectorAll(`.edit-inputs${index}`);
    let data = {};

    for (let i = 0; i < edits.length; i++) {
      console.log(edits[i].name);
      if (edits[i].value) {
        data[`${edits[i].name}`] = edits[i].value;
      }
    }
    console.log(data);
    edits.forEach((item) => {
      item.style.display = "none";
    });
    button.style.display = "none";

    const res = await axios.put(`/projects/${id}`, data);
    try {
      if (res.status == 200) {
        document.getElementById(`update_message${index}`).style.display =
          "block";
          
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    // console.log(this.props.project);
    return (
      <>
        <div className="projects">
          <h1 className="project-title">Projects</h1>
          <form method="POST" action="/" className="project-img">
            <div className="porject-image"></div>

            <div className="project-button">
              {this.props.project.map((item, index) => {
                return (
                  <div className={`proj-container${index}`}>
                    <div className="first-items">
                      <input
                        type="text"
                        placeholder="Link"
                        disabled
                        value={item.title}
                      ></input>
                      <input
                        type="text"
                        placeholder="Link"
                        disabled
                        value={item.description}
                      />
                      <input
                        type="text"
                        placeholder="Link"
                        disabled
                        value={item.link}
                      />
                      <input
                        type="text"
                        placeholder="Link"
                        disabled
                        value={item.imageLink}
                      />
                    </div>
                    <div className="second-items">
                      <input
                        name="title"
                        className={`edit-inputs${index}`}
                        style={{ display: "none" }}
                        type="text"
                        placeholder="New title"
                      ></input>
                      <input
                        name="description"
                        className={`edit-inputs${index}`}
                        style={{ display: "none" }}
                        type="text"
                        placeholder="New description"
                      />
                      <input
                        name="link"
                        className={`edit-inputs${index}`}
                        style={{ display: "none" }}
                        type="text"
                        placeholder="New link"
                      />
                      <input
                        name="imageLink"
                        className={`edit-inputs${index}`}
                        style={{ display: "none" }}
                        type="text"
                        placeholder="New imageLink"
                      />
                    </div>
                    <Button text="Edit" click={() => this.edit(index)} />
                    <Button
                      text="Delete"
                      click={() => this.delete(item._id, index)}
                    />
                    <div style={{ display: "none" }} className={`C${index}`}>
                      <Button
                        text="Save"
                        click={() => this.save(item._id, index)}
                      />
                    </div>
                    <div
                      id={`update_message${index}`}
                      style={{ display: "none" }}
                    >
                      <UpdateItem />
                    </div>
                    <div className={`display-none delete-message${index}`}>
                      <MessageDeleted />
                    </div>
                  </div>
                );
              })}
            </div>
          </form>
          <form method="POST" action="/" className="project-link">
            <input id="projectLink" type="text" placeholder="Link" required />
            <input id="projectTitle" type="text" placeholder="Title" required />
            <input
              id="projectDescription"
              type="text"
              placeholder="Description"
              required
            />
            <AddImg change={this.fileChangeHandler} />
            <Button text="Add Project" click={this.updateContent} />
            <div id={`add_message`} style={{ display: "none" }}>
              <UpdateItem />
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Projects;
