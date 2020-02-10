import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PlanetPage from './planets-page/planets-page.component.js';

const app = () => (
	<BrowserRouter>
		<Route path="/planets" component={PlanetPage} />
	</BrowserRouter>
);

export default app;
