import React, { Component } from "react";
import "./about-me.css";
import axios from "axios";
import AddImg from "../Skills/addImg";
import Button from "../Skills/button";
import UpdateItem from "../UpdateItem";

export class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.getData();
    this.state = {
      name: "",
      description: "",
      content: "",
    };
  }

  fileChangeHandler = () => {
    let inputField = document.getElementsByClassName("photo-input")[0];
    this.setState({
      fileData: inputField.files["0"],
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("photo", this.state.fileData);
    axios
      .post("aboutme/upload", data)
      .then((res) => {
        if (res.status == 200) {
          document.getElementById('update_message0').style.display = "block"
        }
      })
      .catch((err) => console.log(err));
  };

  getData = async () => {
    try {
      const res = await axios.get("/aboutme");
      const { name, description, content } = res.data.response[0];
      this.setState({
        name,
        description,
        content,
      });
    } catch (err) {
      console.log(err);
    }

    let textarea = document.getElementById("textarea");
    let namefield = document.getElementById("name-field");
    let descriptionField = document.getElementById("description");
    textarea.value = this.state.content;
    namefield.value = this.state.name;
    descriptionField.value = this.state.description;
  };

  updateContent = async (e) => {
    e.preventDefault();
    let namefield = document.getElementById("name-field");
    let descriptionfield = document.getElementById("description");

    let data = {
      name: namefield.value,
      description: descriptionfield.value,
    };
    const res = await axios.put("/aboutme", data);
    try {
      if (res.status == 200) {
        document.getElementById('update_message1').style.display = "block"
      };
    } catch (error) {
      console.log(error);
    }
  };

  updateContentText = async (e) => {
    e.preventDefault();
    let textarea = document.getElementById("textarea");
    let data = {
      content: textarea.value,
    };
    const res = await axios.put("/aboutme", data);
    try {
      if (res.status == 200) {
        document.getElementById('update_message2').style.display = "block"
      };
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="about-me">
        <h1>About Me</h1>
        <br />
        <div className="wrapper">
          <div className="photo">
            <form method="POST" enctype="multipart/form-data">
              <div>
                <label>Upload profile picture</label>
                <br />
                <br />
                <AddImg change={this.fileChangeHandler} />
              </div>
              <div>
                <Button name="photo" text="Upload" click={this.onSubmitHandler}/>
                <div id="update_message0" style={{display:"none"}}>
                  <UpdateItem />
                </div>
              </div>
            </form>
          </div>
          <div className="name">
            <form method="POST">
              <div>
                <label>Change name and description</label>
                <br />
                <br />
                <input
                  id="name-field"
                  className="field"
                  type="text"
                  name="full-name"
                  placeholder="Name"
                />
                <br />
                <textarea
                  id="description"
                  className="field"
                  name="description"
                  placeholder="Description"
                  cols="35"
                  rows="0"
                ></textarea>
              </div>
              <div>
                <Button text="Update" click={this.updateContent} />
                <div id="update_message1" style={{display:"none"}}>
                  <UpdateItem />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="content">
          <form method="POST" action="/toContent">
            <div>
              <label>Change content</label>
              <br />
              <textarea id="textarea" cols="35" rows="10"></textarea>
            </div>
            <br />
            <div>
              <Button text="Update content" click={this.updateContentText} />
              <div id="update_message2" style={{display:"none"}}>
                <UpdateItem />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AboutMe;
