import React, { Component } from "react";
import "./experience.css";
import axios from "axios";
import Button from "../Skills/button";
import MessageDeleted from "../MessageDeleted";
import AddImg from "../Skills/addImg";
import UpdateItem from "../UpdateItem";
export class Experiences extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.setData();
    }, 4000);
  }

  setData = () => {
    this.props.experiencesProp.map((item, index) => {
      Object.keys(item).map((key, index1) => {
        if (key !== "_id" && key !== "__v") {
          let name = document.getElementsByName(`${key}${index}`)[0];
          name.value = item[key];
          // console.log(name);
        }
      });
    });
  };

  edit = (id, index) => {
    // console.log(id,index);
    let button = document.querySelector(".C" + index);
    button.style.display = "block";
    let itemToEdit = document
      .getElementsByClassName(`exp-container${index}`)[0]
      .querySelectorAll("input");
    itemToEdit.forEach((item) => {
      item.disabled = false;
    });
    // console.log(itemToEdit);
  };

  save = async (id, index) => {
    let edits = document.querySelectorAll(`.edit-inputs${index}`);
    console.log(edits);
    let data = {};
    let button = document.querySelector(".C" + index);
    button.style.display = "none";
    let itemToEdit = document
      .getElementsByClassName(`exp-container${index}`)[0]
      .querySelectorAll("input");
    itemToEdit.forEach((item) => {
      item.disabled = true;
    });

    for (let i = 0; i < edits.length; i++) {
      console.log(edits[i].name);
      if (edits[i].value) {
        data[`${edits[i].name.slice(0, -1)}`] = edits[i].value;
      }
    }

    const res = await axios.put(`/experiences/${id}`, data);
    try {
      if (res.status == 200) {
        document.getElementById(`update_message${index}`).style.display =
          "block";
      };
    } catch (error) {
      console.log(error);
    }
  };

  delete = async (id, index) => {
    const res = await axios.delete(`/experiences/${id}`);
    try {
      let message = document.getElementsByClassName(`delete-message${index}`);
      message[0].classList.remove("display-none");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  fileChangeHandler = (e) => {
    this.setState({
      fileData: e.target.files["0"],
    });
  };

  updateContent = async (e) => {
    e.preventDefault();

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

    let link = document.getElementById("exp-link").value;
    let title = document.getElementById("exp-title").value;
    let description = document.getElementById("exp-desciption").value;
    let list_title = document.getElementById("list-title").value;
    let list_itemData = Array.from(document.querySelectorAll(".list_item"));
    let dateFrom = document.getElementById("dateFrom").value;
    let dateTo = document.getElementById("dateto").value;
    let list_item = [];

    list_itemData.map((item) => {
      if (item.value != "") {
        list_item.push(item.value);
      }
    });

    let data = {
      imageLink: path,
      link: link,
      title: title,
      description: description,
      list_title: list_title,
      list_item: list_item,
      dateFrom: dateFrom,
      dateTo: dateTo,
    };
    const res = await axios.post("/experiences", data);
    try {
      if (res.status == 200) {
        document.getElementById('add_message').style.display = "block"
      };;
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="experiences">
        <h1>Experiences</h1>
        <div className="exp-page-wrapper">
          <div className="current-exp">
            <form action="/" method="post">
              <label>
                {this.props.experiencesProp.map((item, index) => {
                  // console.log(item);
                  return (
                    <div className={`exp-container exp-container${index}`}>
                      {Object.keys(item).map((key, index1) => {
                        if (key !== "_id" && key !== "__v") {
                          return (
                            <input
                              className={`edit-inputs${index}`}
                              type="text"
                              name={`${key}${index}`}
                              disabled
                            />
                          );
                        }
                      })}
                      <Button
                        text="Edit"
                        click={() => {
                          this.edit(item._id, index);
                        }}
                      />
                      <Button
                        text="Delete"
                        click={() => {
                          this.delete(item._id, index);
                        }}
                      />
                      <div style={{ display: "none" }} className={`C${index}`}>
                        <Button
                          text="Save"
                          click={() => this.save(item._id, index)}
                        />
                      </div>
                      <div className={`display-none delete-message${index}`}>
                        <MessageDeleted />
                      </div>
                      <div
                        id={`update_message${index}`}
                        style={{ display: "none" }}
                      >
                        <UpdateItem />
                      </div>
                    </div>
                  );
                })}
              </label>
            </form>
          </div>
          <div className="add-exp">
            <form action="/" method="post">
              <label>
                <input
                  type="text"
                  name="title"
                  id="exp-title"
                  required
                  placeholder="Title"
                />
              </label>
              <label>
                <input
                  type="text"
                  name="link"
                  id="exp-link"
                  required
                  placeholder="Link"
                />
              </label>
              <label>
                <input
                  type="text"
                  name="description"
                  id="exp-desciption"
                  required
                  placeholder="Description"
                />
              </label>
              <label>
                <input
                  type="text"
                  name="list-title"
                  id="list-title"
                  required
                  placeholder="List title"
                />
              </label>
              {/* <label> */}
                {/* <label>
                  <input
                    type="text"
                    name="imageLink"
                    id="imageLink"
                    required
                    placeholder="image LinK"
                  />
                </label> */}
                <input
                  type="text"
                  className="list_item"
                  name="list-item"
                  required
                  placeholder="List item"
                />
                {/* <input
                  type="text"
                  className="list_item"
                  name="list-item"
                  placeholder="List item"
                />
                <input
                  type="text"
                  className="list_item"
                  name="list-item"
                  placeholder="List item"
                />
              </label> */}
              <label className="date-from">
                Date from
                <input id="dateFrom" type="date" name="date-from" required />
              </label>
              <label className="date-to">
                Date to
                <input id="dateto" type="date" name="date-to" required />
              </label>
              <AddImg change={this.fileChangeHandler} />
              <Button text="ADD" click={this.updateContent} />
              <div id={`add_message`} style={{ display: "none" }}>
              <UpdateItem />
            </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Experiences;
