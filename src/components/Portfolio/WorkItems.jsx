import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <div className="work-align-content">
        <h3 className="work__title">{item.title}</h3>
        {item.title === "Work at SISCOG SA" && <i className="uil ml-less uil-trademark"></i>}
      </div>
      <a href={item.url} className="work__button">
        View Project
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
