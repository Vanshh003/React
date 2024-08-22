import React from "react";
import ReactDOM from "react-dom/client"


/* <div id = "parent">
		<div id = "child">
				<h1>im a h1 tag </h1>
				<h2>im a h2 tag </h2>
		</div>
		<div id = "child2">
				<h1>im a h1 tag </h1>
				<h2>im a h2 tag </h2>
		</div>
</div>

 */






// in react
const parent = React.createElement(                      // takes 3 arguments.. which tag, an object, what to put inside that tag
    "div",                   // name of tag
    {id: "parent"},          // attributes
    [
		    React.createElement(     // child
		        "div", 
		        {id: "child"},
		        [
			        React.createElement("h1", {}, "im an h1 tag"),
			        React.createElement("h2", {}, "im an h2 tag")
			    ]
		    ),
		    React.createElement(     // child2
		        "div", 
		        {id: "child2"},
		        [
			        React.createElement("h1", {}, "im an h1 tag"),
			        React.createElement("h2", {}, "im an h2 tag")
			    ]
		    )
	  ]
);


console.log(parent);     // object

// now put this heading in/under this div id=root
const root = ReactDOM.createRoot(document.getElementById("root"));    

// render our heading inside that root
root.render(parent);