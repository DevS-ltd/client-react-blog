import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	menuButton: {
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
}));

export default function MenuButton(props) {
	const classes = useStyles();
	return (
		<IconButton
			edge="start"
			color="primary"
			size="medium"
			onClick={props.onClickButton}
			className={classes.menuButton}
		>
			<MenuIcon fontSize="small" />
		</IconButton>
	);
}

MenuButton.propTypes = {
	onClickButton: PropTypes.func.isRequired,
};
