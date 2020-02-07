import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './app.js';

const reactLifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: App,
	domElementGetter,
});

export const bootstrap = [reactLifecycles.bootstrap];

export function mount(props) {
	return reactLifecycles.mount(props);
}

export const unmount = [reactLifecycles.unmount];

export const unload = [reactLifecycles.unload];

function domElementGetter() {
	let el = document.getElementById('navbar');
	if (!el) {
		el = document.createElement('div');
		el.id = 'navbar';
		document.body.appendChild(el);
	}

	return el;
}
