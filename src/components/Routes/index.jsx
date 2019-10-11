import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

class Routes extends React.Component {
	render() {
		return (
			<Suspense fallback="loading">
				<Switch>
					<Route path="/" exact component={lazy(() => import('../Blog'))} />
					<Route exact component={lazy(() => import('../NotFound'))} />
				</Switch>
			</Suspense>
		);
	}
}

export default Routes;
