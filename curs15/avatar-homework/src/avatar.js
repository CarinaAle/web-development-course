import React from "react";

const Person = (props) => {
  return (
    <div className="Person">
      <div className="Information">
          <img className="Picture" src={props.author.pictureUrl}/>
          <div className="Name">
              {props.author.name}
          </div>
          <div className="Comment">
              {props.text}
          </div>
          <div className="Date">
              {props.date}
          </div>
      </div>
    </div>
  );
};

export default Person;