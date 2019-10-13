import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';

import { BLOG, CONTACTS, LOGIN, REGISTER } from '../../../../constants/urls';

const useStyles = makeStyles(theme => ({
	navList: {
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	navLink: {
		padding: theme.spacing(2),
	},
	navAuthLink: {
		margin: theme.spacing(1),
		textTransform: 'none',
	},
}));

export default function NavList() {
	const classes = useStyles();
	return (
		<div className={classes.navList}>
			<MaterialLink
				color="inherit"
				underline="none"
				component={Link}
				to={BLOG}
				className={classes.navLink}
			>
				Blog
			</MaterialLink>
			<MaterialLink
				color="inherit"
				underline="none"
				component={Link}
				to={CONTACTS}
				className={classes.navLink}
			>
				Contacts
			</MaterialLink>
			<Button
				variant="outlined"
				color="primary"
				component={Link}
				to={LOGIN}
				className={classes.navAuthLink}
			>
				Login
			</Button>
			<Button
				variant="contained"
				color="primary"
				component={Link}
				to={REGISTER}
				className={classes.navAuthLink}
			>
				Sign up for Free
			</Button>
		</div>
	);
}
