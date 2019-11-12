import React from 'react';
import {
	Box,
	Grid,
	Link,
	Container,
	Typography,
	makeStyles,
} from '@material-ui/core';

import SocialLinks from '../SocialLinks';

const useStyles = makeStyles(theme => ({
	wrapper: {
		padding: '2rem 0',
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center',
		},
	},
	title: {
		fontSize: '3rem',
		marginBottom: '1.5rem',
	},
	subTitle: {
		fontSize: '2rem',
		marginBottom: '1rem',
	},
	socialWrapper: {
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
		},
	},
}));

export default function() {
	const classes = useStyles();
	return (
		<Container>
			<Box className={classes.wrapper}>
				<Grid container justify="center">
					<Grid item md={8}>
						<Typography variant="h1" className={classes.title}>
							Contacts
						</Typography>
						<Box>
							<Typography variant="h3" className={classes.subTitle}>
								Email Us
							</Typography>
							<Typography paragraph={true}>
								<Link
									href={`mailto:${process.env.REACT_APP_SOCIAL_EMAIL}`}
									color="inherit"
									underline="none"
								>
									{process.env.REACT_APP_SOCIAL_EMAIL}
								</Link>
							</Typography>
						</Box>
						<Box>
							<Typography variant="h3" className={classes.subTitle}>
								Social Links
							</Typography>
							<Grid container spacing={1} className={classes.socialWrapper}>
								<SocialLinks />
							</Grid>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}
