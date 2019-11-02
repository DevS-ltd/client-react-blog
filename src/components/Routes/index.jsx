import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Box, Grid, withStyles } from '@material-ui/core';

import Header from '../Header';
import Footer from '../Footer';
import { BLOG, POST } from '../../constants/urls';

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
			<Suspense fallback="loading">
				<Switch>
					<Route>
						<Box className={classes.contentWrapper}>
							<Header />
							<Grid container className={classes.content}>
								<Switch>
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
									<Route exact component={lazy(() => import('../NotFound'))} />
								</Switch>
							</Grid>
							<Footer />
						</Box>
					</Route>
				</Switch>
			</Suspense>
		);
	}
}

export default withStyles(styles)(Routes);
