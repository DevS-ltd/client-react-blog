import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header';
import { DASHBOARD } from '../../constants/urls';

class Routes extends React.Component {
	render() {
		return (
			<Suspense fallback="loading">
				<Switch>
					<Route>
						<Header />
						<Switch>
							<Route
								path={DASHBOARD}
								exact
								component={lazy(() => import('../Blog'))}
							/>
							<Route exact component={lazy(() => import('../NotFound'))} />
						</Switch>
					</Route>
				</Switch>
			</Suspense>
		);
	}
}

export default Routes;
