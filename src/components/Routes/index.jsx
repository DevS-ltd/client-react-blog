import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Box, Grid, withStyles } from '@material-ui/core';

import Loader from '../Loader';
import Header from '../Header';
import Footer from '../Footer';
import { DASHBOARD, BLOG, POST, CONTACTS } from '../../constants/urls';

const styles = theme => ({
	contentWrapper: {
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flexGrow: 1,
		[theme.breakpoints.only('xs')]: {
			paddingTop: '3.5rem',
		},
		[theme.breakpoints.up('sm')]: {
			paddingTop: '4rem',
		},
	},
});

class Routes extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<Switch>
				<Route>
					<Box className={classes.contentWrapper}>
						<Header />
						<Grid container className={classes.content}>
							<Suspense fallback={<Loader />}>
								<Switch>
									<Route
										path={DASHBOARD}
										exact
										component={lazy(() => import('../Dashboard'))}
									/>
									<Route
										path={BLOG}
										exact
										component={lazy(() => import('../Blog'))}
									/>
									<Route
										path={POST()}
										exact
										component={lazy(() => import('../Post'))}
									/>
									<Route
										path={CONTACTS}
										exact
										component={lazy(() => import('../Contacts'))}
									/>
									<Route exact component={lazy(() => import('../NotFound'))} />
								</Switch>
							</Suspense>
						</Grid>
						<Footer />
					</Box>
				</Route>
			</Switch>
		);
	}
}

export default withStyles(styles)(Routes);
