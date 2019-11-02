import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, makeStyles, Toolbar } from '@material-ui/core';

import Logo from '../../Logo';
import NavList from './NavList';
import MenuButton from '../MenuButton';

const useStyles = makeStyles(theme => ({
	toolbar: {
		justifyContent: 'space-between',
	},
	logoWrapper: {
		flexGrow: 1,
		display: 'flex',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
			marginRight: theme.spacing(5.5),
		},
	},
}));

export default function Navbar(props) {
	const classes = useStyles();

	return (
		<AppBar color="inherit" position="static">
			<Toolbar className={classes.toolbar}>
				<MenuButton onClickButton={props.onClickButton} />

				<Box className={classes.logoWrapper}>
					<Logo />
				</Box>

				<NavList />
			</Toolbar>
		</AppBar>
	);
}

Navbar.propTypes = {
	onClickButton: PropTypes.func.isRequired,
};
