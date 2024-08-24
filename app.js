import React from "react";
import ReactDOM from "react-dom/client"

// React Element
const heading = (
	<h1 id="heading" className="head" tabIndex="5">
		it's react using jsx
	</h1>
);



// React Functional Component
const HeadingComponent = () => (
	<h1 className="heading">React Functional Component</h1>
);

// ⬆️ same as ⬇️ 

const HeadingComponent2 = () => {
	return <h1 className="heading">React Functional Component</h1>
};

// ⬆️ same as ⬇️ 

const HeadingComponent3 = () => <h1 className="heading">React Functional Component</h1>;



// it can also return multiple react elements
const HeadingComponent4 = () => (
	<div id="container">
		<h1 className="heading">React Functional Component</h1>
	</div>
);





 
// now put this heading in/under this div id=root
const root = ReactDOM.createRoot(document.getElementById("root"));    

// render our heading component inside that root
root.render(<HeadingComponent />);