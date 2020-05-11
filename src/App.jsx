import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "components/Navbar";

import Home from "pages/Home";

const App = () => {
	return (
		<>
			<Router>
				<div>
					<Navbar />

					<Switch>
						<Route>
							<Home exact path="/" />
						</Route>
					</Switch>
				</div>
			</Router>
		</>
	);
};

export default App;
