import React, { Component } from "react";
import "./experience.css";
export default class Experience extends Component {
  render() {
    // console.log(this.props.experienceProp);
    // const {title, text, imageLink,description, list_title, list_item} = this.props.experienceProp;
    return (
      <div className="experience">
        {this.props.experienceProp.map((item, index) => {
          let {
            title,
            imageLink,
            description,
            list_title,
            list_item,
            link,
            dateFrom,
            dateTo,
          } = item;
          // console.log([dateFrom, dateTo]);console.log
          dateFrom = `${new Date(dateFrom).getFullYear()} / ${new Date(dateFrom).getMonth()+1}`;
          dateTo = `${new Date(dateTo).getFullYear()} / ${new Date(dateTo).getMonth()+1}`;
          // console.log(dateFrom);
          return (
            <div className="experience-item" key={index}>
              <div className="experience-photo">
                <a href={link}>
                  <img src={imageLink} alt="Experience Photo" />
                </a>
                <p>
                  <span>{dateTo}</span> - <span>{dateFrom}</span>
                </p>
              </div>
              <div className="experience-text">
                <h2>{title}</h2>
                <p>{description}</p>
                <ul>
                  <h4>{list_title}</h4>
                  {list_item.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
