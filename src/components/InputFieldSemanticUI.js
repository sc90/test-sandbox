import React from "react";
import { Input } from "semantic-ui-react";


const InputFieldSemanticUI = props => {
  const inputChange = (event, { value }) => {
     console.log(value);
     props.onChange(value);
  }
  
  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href =
    "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
  document.head.appendChild(styleLink);
  return <Input placeholder="Enter amount to convert" onChange={inputChange}/>;
};

export default InputFieldSemanticUI;