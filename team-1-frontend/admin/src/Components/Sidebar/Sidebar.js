import React, { Component } from "react";
import { SidebarLink } from "./SidebarLink";
import { NavLink } from "react-router-dom";


export class Sidebar extends Component {
  
  render() {

    return (
      <div className="sidebar">
        <div className="greeting">Welcome, Baraa Haydar</div>
        <ul className="sidebarList">
          {SidebarLink.map((v, key) => {
            return (
              <li
                key={key}
                className="row"
              >
                <NavLink exact to={v.link} className="link" activeClassName="active">
                  <div id="icon">{v.icon}</div>
                  <div id="title">{v.title}</div>
                </NavLink >
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
