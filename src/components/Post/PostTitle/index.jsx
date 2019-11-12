import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	title: {
		fontSize: '1.4rem',
		lineHeight: 1,
		fontWeight: 500,
		paddingBottom: theme.spacing(2),
	},
}));

export default function(props) {
	const classes = useStyles();

	return (
		<Typography variant="h5" classes={{ h5: classes.title }}>
			{props.post.title}
		</Typography>
	);
}
