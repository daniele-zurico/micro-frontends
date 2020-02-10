import React from 'react';
import Logo from './logo.svg';
import './App.css';
import styles from './app.module.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Logo />
				<p className={styles.test}>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
