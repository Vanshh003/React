import React from "react";
import ReactDOM from "react-dom/client"

const title = (
	<h1 className="head" tabIndex="5">
		{elem}
		it's react using jsx... 
	</h1>
);


const TitleComponent = () => (
	<h1 className="head" tabIndex="5">
		Title Component
	</h1>
);


// suppose we had an api which is giving us malacious data.. attacker tries to send some code when will do bad things upon execution
const data = api.getData();

const HeadingComponent = () => (
	<div id="container">

		all of the following calls/methods are the same
		<TitleComponent />
		<TitleComponent></TitleComponent>
		{TitleComponent()}

		{/* and that malicious js code is being executed here.. now the attacker can do an attack on you.. it can steal cookies, read local storage, read your cookies.. session storage.. get info about the system and much more..
		this type of attack is called cross-site scripting */}
		{data}
		<h1 className="heading">React Functional Component</h1>
	</div>
);

 
// now put this heading in/under this div id=root
const root = ReactDOM.createRoot(document.getElementById("root"));    

// render our heading component inside that root
root.render(<HeadingComponent />);