import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import { property } from 'lodash';
import setPublicPath from './set-public-path.js';

const reactLifecycles = singleSpaReact({
	React,
	ReactDOM,
	loadRootComponent: () =>
		import(/* webpackChunkName: "currency-app" */ './root.component.js').then(property('default')),
	domElementGetter,
});

export const bootstrap = [
	() => {
		return setPublicPath();
	},
	reactLifecycles.bootstrap,
];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];

export const unload = [reactLifecycles.unload];

function domElementGetter() {
	let el = document.getElementById('currency');
	if (!el) {
		el = document.createElement('div');
		el.id = 'currency';
		document.body.appendChild(el);
	}

	return el;
}
