import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Box, withStyles } from '@material-ui/core';

import Header from '../Header';
import Footer from '../Footer';
import { DASHBOARD } from '../../constants/urls';

const styles = {
	contentWrapper: {
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flexGrow: 1,
	},
};

class Routes extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<Suspense fallback="loading">
				<Switch>
					<Route>
						<Box className={classes.contentWrapper}>
							<Header />
							<Box className={classes.content}>
								<Switch>
									<Route
										path={DASHBOARD}
										exact
										component={lazy(() => import('../Blog'))}
									/>
									<Route exact component={lazy(() => import('../NotFound'))} />
								</Switch>
							</Box>
							<Footer />
						</Box>
					</Route>
				</Switch>
			</Suspense>
		);
	}
}

export default withStyles(styles)(Routes);
