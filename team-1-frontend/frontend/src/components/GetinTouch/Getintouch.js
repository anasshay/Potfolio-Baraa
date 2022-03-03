import React, { Component } from "react";
import "./Getintouch.css";
import emailjs from "emailjs-com";
export default class Getintouch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
   sendEmail = (e)=>  {
    e.preventDefault();
    this.setState({loading: true})
    let showMessage = document.getElementById("message");
    let inputs = document.getElementsByClassName("empty-content"); //HTML elements
    var inputsArr = Array.prototype.slice.call(inputs);
    emailjs
      .sendForm(
        "service_fef2f73",
        "template_nnhk1ki",
        e.target,
        "user_oGhahEeNecD9nmpPzf3Q4"
      )
      .then(() => {
        this.setState({loading:false})
        showMessage.classList.add("show-message");
        inputsArr.map((item) => {
          item.value = "";
        });
      })
      .catch((error) => alert("Couldn't send message"));
    setTimeout(() => {
      showMessage.classList.remove("show-message");
    }, 15000);
  }

  render() {

    return (
      <div id="get-in-touch">
        <div className="title">
          <h1 className="main-h1">
            Get in touch
            <hr />
          </h1>
        </div>

        <div className="contact-container">
          <form onSubmit={this.sendEmail}>
            <div className="left-container">
              <label>
                Name
                <input
                  type="text"
                  className="left-input empty-content"
                  name="name"
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="text"
                  className="left-input empty-content"
                  name="email"
                  required
                />
              </label>
              <label>
                Subject
                <input
                  type="text"
                  className="left-input empty-content"
                  name="subject"
                  required
                />
              </label>
            </div>
            <div className="right-container">
              <label>
                Message
                <textarea
                  className="empty-content"
                  name="message"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </label>
              <input type="submit" value="Send" />
            </div>
          </form>
          {this.state.loading && (
            <div id="loading-message">
              <div className="loader1"></div>
            </div>
          )}
          <p id="message">Message send successfully!</p>
        </div>
      </div>
    );
  }
}
