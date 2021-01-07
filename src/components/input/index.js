
import React from "react";

import "./index.scss";

//Fuctional input view component

const InputApp = ({onChange, placeholder} = props) => {

  return (<input placeholder={placeholder} onChange={(e)=>onChange(e.target.value)}></input>)
};

export default InputApp;

