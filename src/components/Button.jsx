import React from "react";
import "./Buttons.css";
// interesting thing here! usually we should be careful with space on strings on the case here we have to have space because we are concatenate classes together
export default (props) => {
  let classes = "btn "; /**<----- interesting thing*/
  classes += props.operation ? "operation" : "";
  classes += props.double ? "double" : "";
  classes += props.triple ? "triple" : "";

  return (
    <button
      onClick={(e) => props.click && props.click(props.label)}
      className={classes}
    >
      {props.label}
    </button>
  );
};
