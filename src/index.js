import React from "react";
// import reactDom from "react-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // React.createElement("h1", { style: { color: "rebeccapurple" } }, "Wednesday"),
  // <ul>
  //   <li>Monday</li>
  //   <li>Tuesday</li>
  //   <li>Wednesday</li>
  //   <li>Thursday</li>
  //   <li>Friday</li>
  // </ul>,
  <App />,
  document.querySelector("#root")
);

//% ReactDom.render takes in 2 arguments.
//% 1st argument takes in an HTML element or a function that return HTML.
//! It does not run in the browser natively. Taking in HTML like that is made possible by Babel
//@   1. a React Function
//@   2. React.createElement (See line 9)
//@   3. straight HTML
//% 2nd argument takes in a document method that target a specific DOM
//@   eg. document.querySelector("#root")

//% React.CreateElement takes 3 arguments here:
//% 1st argument is an HTML tag as a string, eg. "h1"
//% 2nd argument is CSS (if no styling needed, pass in `null`)
//% 3rd argument is the content inside the HTML element. You can also use React.CreateElement() as the 3rd argument for nesting elements

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
