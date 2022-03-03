import React, { Component } from "react";
import "./navbar.css";
// import icon from "../NavBar/icon.png";
import photo from "../NavBar/index.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import Button from "../button/Button";

const date = new Date().getFullYear();

const open = () => {
  let navbar = document.getElementById("navbar");
  let close = document.getElementById("close");
  navbar.classList.add("open");
  close.classList.add("open");
};
const close = () => {
  let navbar = document.getElementById("navbar");
  let close = document.getElementById("close");
  navbar.classList.remove("open");
  close.classList.remove("open");
};

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div onClick={open}>
          <button className="codebar nav-btn">
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>
        </div>
        <div id="navbar" className="navbar out">
          <button className="close nav-btn" id="close">
            <FontAwesomeIcon icon={faWindowClose} size="2x" onClick={close} />
          </button>
          <div className="profile">
            <img src={`${this.props.navData[1].image}`} alt="Profile photo" className="profile-photo" />
            <h2 id="navbar-name">{this.props.navData[1].name}</h2>
            <h4>{this.props.navData[1].description}</h4>
          </div>
          <div className="nav-sections">
            <Button name="About Me" id="#about-me" click={close} />
            <Button name="Skills" id="#skills" click={close} />
            <Button name="Experiences" id="#experiences" click={close} />
            <Button name="Procject" id="#projects" click={close} />
            <Button name="Get in touch" id="#get-in-touch" click={close} />
          </div>
          <div className="social-media">
            {this.props.navData[2].map((item, index) => {
              return (
                <a key={index} href={item.link} target="_blank">
                  <img className="social-icon" src={item.imageLink} alt={item.link}/>
                </a>
              );
            })}
          </div>
          <div className="copyrights">
            <span>&copy; {date} All rights reserved.</span>
          </div>
        </div>
      </div>
    );
  }
}
