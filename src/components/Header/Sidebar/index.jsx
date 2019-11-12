import React from 'react';
import PropTypes from 'prop-types';
import { Box, Drawer, makeStyles } from '@material-ui/core';

import SideList from './SideList';

const useStyles = makeStyles({
	list: {
		width: 250,
	},
});

export default function Sidebar(props) {
	const classes = useStyles();
	return (
		<Drawer open={props.open} onClose={props.onClose}>
			<Box
				className={classes.list}
				onClick={props.onClose}
				onKeyDown={props.onClose}
			>
				<SideList />
			</Box>
		</Drawer>
	);
}

Sidebar.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool,
};

Sidebar.defaultProps = {
	open: true,
};
