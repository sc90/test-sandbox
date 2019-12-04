import React from "react";
import { Dropdown } from "semantic-ui-react";

const countryCurrencies = [
  {
    key: 'MYR',
    text: 'Malaysian Ringgit',
    value: 'MYR'
  },
  {
    key: 'EURO',
    text: 'European dollar',
    value: 'EUR'
  },
  {
    key: 'SGD',
    text: 'Singapore Dollar',
    value: "SGD"
  },
  {
    key: 'USD',
    text: 'American Dollar',
    value: 'USD'
  },
  {
    key: 'JPN',
    text: 'Yen',
    value: 'JPN'
  }
];

const DropdownSemanticUI = props => {
  const getCurrency = (event, { value }) => {
     props.onChange(value);
  };

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

 return  <div style={{"width":"200px"}}>
    <Dropdown
      placeholder={props.text}
      fluid
      selection
      options={countryCurrencies}
      onChange={getCurrency}
    />
  </div>;
};

export default DropdownSemanticUI;
