import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	meta: {
		fontSize: '.8rem',
	},
}));

export default function(props) {
	const classes = useStyles();

	return (
		<Typography paragraph className={classes.meta}>
			By {props.post.author.name} {props.post.created_at}
		</Typography>
	);
}
