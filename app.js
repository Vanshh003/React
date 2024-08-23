import React from "react";
import ReactDOM from "react-dom/client"
import { jsx } from "react/jsx-runtime";


// React.createElement => Object => HTML Element(render)

// in react
const heading = React.createElement(                      // takes 3 arguments.. which tag, an object, what to put inside that tag
    "div",                   // name of tag
    {id: "parent"},          // attributes
    "it's react"			 // children
);

console.log(heading);     // object




// JSX - HTML-like or XML-like syntax
// JSX (transocmpiled before it reaches the js engine) - PARCEL - Babel
// JSX => React.createElement => ReactElement - JS Object => HTML Element (render)

// in jsx
const jsxHeading = <h1 id="heading">it's react using jsx</h1>

console.log(jsxHeading);


// now put this heading in/under this div id=root
const root = ReactDOM.createRoot(document.getElementById("root"));    

// render our heading inside that root
root.render(jsxHeading);