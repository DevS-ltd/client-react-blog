import React from 'react';
import {
	Box,
	Grid,
	Container,
	makeStyles,
	Typography,
} from '@material-ui/core';

import MainImg from '../../assets/images/main.jpg';

const useStyles = makeStyles(theme => ({
	headWrapper: {
		paddingTop: '2rem',
		paddingBottom: '2rem',
		[theme.breakpoints.up('md')]: {
			padding: '4rem 0',
		},
	},
	headContentWrapper: {
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row-reverse',
		},
	},
	zeroPadding: {},
	image: {
		maxWidth: '100%',
		maxHeight: '44rem',
		[theme.breakpoints.down('sm')]: {
			marginBottom: '4.25rem',
		},
	},
	contentTitle: {
		fontWeight: 500,
		marginBottom: '1rem',
		[theme.breakpoints.between('xs', 'sm')]: {
			fontSize: '2.25rem',
		},
		[theme.breakpoints.only('md')]: {
			fontSize: '2.5rem',
		},
		[theme.breakpoints.up('lg')]: {
			fontSize: '3rem',
		},
	},
	headTextWrapper: {
		[theme.breakpoints.between('xs', 'sm')]: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			paddingRight: '2rem',
		},
		[theme.breakpoints.only('md')]: {
			width: '465px',
		},
		[theme.breakpoints.up('lg')]: {
			width: '610px',
		},
	},
	contentDescription: {
		[theme.breakpoints.between('xs', 'sm')]: {
			fontSize: '1rem',
		},
		[theme.breakpoints.up('lg')]: {
			fontSize: '1.5rem',
		},
		[theme.breakpoints.up('xl')]: {
			fontSize: '1.8rem',
		},
	},
}));

export default function() {
	const classes = useStyles();

	return (
		<>
			<Container maxWidth={false} className={classes.headWrapper}>
				<Grid container className={classes.headContentWrapper}>
					<Grid item xs={12} md={6}>
						<img src={MainImg} alt="Main Blog" className={classes.image} />
					</Grid>
					<Grid item xs={12} md={6}>
						<Grid container justify="flex-end">
							<Box className={classes.headTextWrapper}>
								<Typography variant="h1" className={classes.contentTitle}>
									DevStation Limited - Blog with React
								</Typography>
								<Typography
									paragraph={true}
									className={classes.contentDescription}
									component="div"
								>
									Project dependencies:
									<ul>
										<li>@material-ui/core: ^4.5.0</li>
										<li>@material-ui/icons: ^4.4.3</li>
										<li>@material-ui/lab: ^4.0.0-alpha.30</li>
										<li>axios: ^0.19.0</li>
										<li>node-sass: ^4.12.0</li>
										<li>prop-types: ^15.7.2</li>
										<li>react: ^16.10.2</li>
										<li>react-alice-carousel: ^1.15.3</li>
										<li>react-dom: ^16.10.2</li>
										<li>react-router: ^5.1.2</li>
										<li>react-router-dom: ^5.1.2</li>
										<li>react-scripts: 3.2.0</li>
									</ul>
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
