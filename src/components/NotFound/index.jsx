import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Container, makeStyles } from '@material-ui/core';

import Image from '../../assets/images/404.jpg';
import { DASHBOARD } from '../../constants/urls';

const useStyle = makeStyles(() => ({
	image: {
		maxWidth: '100%',
		maxHeight: '600px',
	},
	linksWrapper: {
		padding: '2rem 0',
	},
}));

export default function() {
	const classes = useStyle();
	return (
		<Container>
			<Grid container justify="center">
				<img
					src={Image}
					alt="Page Not Found"
					className={classes.image}
					align="center"
				/>
			</Grid>
			<Grid container justify="center" className={classes.linksWrapper}>
				<Button
					variant="contained"
					color="primary"
					component={Link}
					to={DASHBOARD}
				>
					Go to Home Page
				</Button>
			</Grid>
		</Container>
	);
}
