import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
	postWrapper: {
		minHeight: '15rem',
		[theme.breakpoints.between('xs', 'sm')]: {
			padding: '1rem 0',
		},
		[theme.breakpoints.up('md')]: {
			padding: '1.5rem 0',
		},
	},
	image: {
		[theme.breakpoints.only('xs')]: {
			padding: '70% 0 0',
		},
		[theme.breakpoints.up('sm')]: {
			height: '100%',
		},
		width: '100%',
	},
	contentWrapper: {
		[theme.breakpoints.only('xs')]: {
			padding: '1.1rem 0 0',
		},
		[theme.breakpoints.only('sm')]: {
			padding: '1rem 0 1rem 1.5rem',
		},
		[theme.breakpoints.only('md')]: {
			padding: '2.2rem 0 2.2rem 2rem',
		},
		[theme.breakpoints.up('lg')]: {
			padding: '2.65rem 0 3rem 3rem',
		},
	},
	title: {
		margin: '0 0 1rem',
		[theme.breakpoints.only('xs')]: {
			height: '1.375rem',
		},
		[theme.breakpoints.only('sm')]: {
			height: '1.5rem',
		},
		[theme.breakpoints.only('md')]: {
			height: '1.625rem',
		},
		[theme.breakpoints.up('lg')]: {
			height: '2rem',
		},
	},
	meta: {
		margin: '1.3rem 0',
		height: '1.5rem',
	},
	text: {
		margin: '.5rem 0',
		height: '1rem',
	},
}));

export default function() {
	const classes = useStyles();

	return Array.from(new Array(2)).map((item, index) => (
		<Grid key={index} container className={classes.postWrapper}>
			<Grid container item xs={12} sm={5} md={4} lg={3}>
				<Skeleton
					variant="rect"
					classes={{ root: classes.image }}
					height="100%"
				/>
			</Grid>
			<Grid item xs={12} sm={7} className={classes.contentWrapper}>
				<Skeleton classes={{ text: classes.title }} />
				<Skeleton classes={{ text: classes.meta }} />
				<Skeleton classes={{ text: classes.text }} />
				<Skeleton classes={{ text: classes.text }} />
				<Skeleton classes={{ text: classes.text }} width="60%" />
			</Grid>
		</Grid>
	));
}
