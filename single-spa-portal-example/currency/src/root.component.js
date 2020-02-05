import React from 'react';

export default class Root extends React.Component {
	state = {
		hasError: false,
	};

	componentDidCatch(error, info) {
		this.setState({ hasError: true });
	}

	render() {
		return this.state.hasError ? (
			<div>Error</div>
		) : (
			<React.Fragment>
				<div>I'm the currency app</div>
			</React.Fragment>
		);
	}
}
