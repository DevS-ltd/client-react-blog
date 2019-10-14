import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

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
			<div
				className={classes.list}
				onClick={props.onClose}
				onKeyDown={props.onClose}
			>
				<SideList />
			</div>
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
