import React from 'react';
import { Link } from 'react-router-dom';
import {
	Grid,
	CardMedia,
	Typography,
	makeStyles,
	Link as MaterialLink,
} from '@material-ui/core';

import { POST } from '../../../constants/urls';

const MAX_POST_ANNOTATION_LENGTH = 125;

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
	imageLink: {
		width: '100%',
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
	title: {
		fontSize: '1.4rem',
		lineHeight: 1,
		fontWeight: 500,
		paddingBottom: theme.spacing(2),
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
	meta: {
		fontSize: '.8rem',
	},
	annotation: {
		fontSize: '.9rem',
		letterSpacing: '-0.01rem',
		textOverflow: 'ellipsis',
	},
	more: {
		fontWeight: 500,
	},
}));

export default function({ post }) {
	const classes = useStyles();

	if (post.annotation.length > MAX_POST_ANNOTATION_LENGTH) {
		post.annotation = `${post.annotation
			.slice(0, MAX_POST_ANNOTATION_LENGTH)
			.split(' ')
			.slice(0, -1)
			.join(' ')}...`;
	}

	return (
		<Grid container className={classes.postWrapper}>
			<Grid container item xs={12} sm={5} md={4} lg={3}>
				<MaterialLink
					to={POST(post.id)}
					color="inherit"
					underline="none"
					component={Link}
					className={classes.imageLink}
				>
					<CardMedia
						className={classes.image}
						image={post.photos[0].url}
						title={post.title}
					/>
				</MaterialLink>
			</Grid>
			<Grid item xs={12} sm={7} className={classes.contentWrapper}>
				<MaterialLink
					to={POST(post.id)}
					color="inherit"
					underline="hover"
					component={Link}
				>
					<Typography variant="h5" classes={{ h5: classes.title }}>
						{post.title}
					</Typography>
				</MaterialLink>
				<Typography paragraph className={classes.meta}>
					By {post.author.name} {post.created_at}
				</Typography>
				<Typography paragraph className={classes.annotation}>
					{post.annotation}
				</Typography>
				<MaterialLink
					to={POST(post.id)}
					color="inherit"
					underline="always"
					component={Link}
				>
					<Typography className={classes.more}>Read Article</Typography>
				</MaterialLink>
			</Grid>
		</Grid>
	);
}
