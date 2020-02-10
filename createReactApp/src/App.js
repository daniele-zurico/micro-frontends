import React from 'react';
import Logo from './logo.svg';
import './App.css';
import styles from './app.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<Logo />
// 				<p className={styles.test}>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
// 					Learn React
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

// export default App;

export default function App() {
	return (
		<Router>
			<div className={styles.test}>
				<nav>
					<ul>
						<li>
							<Link to="/test">Home</Link>
						</li>
						<li>
							<Link to="/test/about">About</Link>
						</li>
						<li>
							<Link to="/test/users">Users</Link>
						</li>
					</ul>
				</nav>

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/test/about">
						<About />
					</Route>
					<Route path="/test/users">
						<Users />
					</Route>
					<Route path="/test">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

function Home() {
	return <h2>Home</h2>;
}

function About() {
	return <h2>About</h2>;
}

function Users() {
	return <h2>Users</h2>;
}
