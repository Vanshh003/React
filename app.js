import React from "react";
import ReactDOM from "react-dom/client"

// React Component
const Title = function() {
	return (
		<h1 id="heading" className="head" tabIndex="5">
			it's react using jsx... Title Component
		</h1>
	)
};


// Component Composition
const HeadingComponent = () => (
	<div id="container">
		{/* to render Title Component into this HeadingComponent.. i.e. all that Title Component code will come here */}
		<Title />		
		<h1 className="heading">React Functional Component</h1>
	</div>
);





 
// now put this heading in/under this div id=root
const root = ReactDOM.createRoot(document.getElementById("root"));    

// render our heading component inside that root
root.render(<HeadingComponent />);