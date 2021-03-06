import React from 'react';
import { Link } from 'react-router-dom';
import {
	Grid,
	List,
	Divider,
	ListItem,
	Container,
	makeStyles,
	Typography,
	ListItemText,
	Link as MaterialLink,
} from '@material-ui/core';

import SocialLinks from '../SocialLinks';
import { BLOG, CONTACTS } from '../../constants/urls';

const useStyles = makeStyles(theme => ({
	footer: {
		padding: `${theme.spacing(4)}px 0`,
	},
	title: {
		fontSize: 16,
		fontWeight: 500,
		textTransform: 'uppercase',
	},
	headerDivider: {
		width: 90,
		margin: `${theme.spacing(1)}px 0 ${theme.spacing(0.5)}px`,
	},
	divider: {
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	linksWrapper: {
		padding: `0 0 ${theme.spacing(2)}px`,
	},
	linkWrapper: {
		padding: 0,
	},
	link: {
		fontWeight: 500,
	},
	socialLinkWrapper: {
		[theme.breakpoints.down('xs')]: {
			padding: `${theme.spacing(1.5)}px 0`,
		},
	},
}));

export default function Footer() {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Container>
				<Grid container justify="center">
					<Grid item container xs={12} sm={7} md={4}>
						<Grid item xs={6}>
							<Typography variant="h4" className={classes.title}>
								Content
							</Typography>
							<Divider className={classes.headerDivider} />
							<List className={classes.linksWrapper}>
								<ListItem className={classes.linkWrapper}>
									<MaterialLink
										to={BLOG}
										color="inherit"
										underline="none"
										component={Link}
										className={classes.link}
									>
										<ListItemText secondary="Blog" />
									</MaterialLink>
								</ListItem>
							</List>
						</Grid>
						<Grid item xs={6}>
							<Typography variant="h4" className={classes.title}>
								About
							</Typography>
							<Divider className={classes.headerDivider} />
							<List className={classes.linksWrapper}>
								<ListItem className={classes.linkWrapper}>
									<MaterialLink
										to={CONTACTS}
										color="inherit"
										underline="none"
										component={Link}
										className={classes.link}
									>
										<ListItemText secondary="Contacts" />
									</MaterialLink>
								</ListItem>
							</List>
						</Grid>
					</Grid>
					<Grid className={classes.divider} item xs={12}>
						<Divider />
					</Grid>
					<Grid container item xs={12} sm={5} md={4}>
						<Grid
							item
							container
							justify="center"
							alignItems="center"
							spacing={1}
							className={classes.socialLinkWrapper}
						>
							<SocialLinks />
						</Grid>
						{Boolean(process.env.REACT_APP_SOCIAL_EMAIL) && (
							<Grid item container justify="center" alignItems="center">
								<MaterialLink
									href={`mailto:${process.env.REACT_APP_SOCIAL_EMAIL}`}
									color="inherit"
									underline="none"
									className={classes.link}
								>
									<ListItemText
										secondary={process.env.REACT_APP_SOCIAL_EMAIL}
									/>
								</MaterialLink>
							</Grid>
						)}
					</Grid>
				</Grid>
			</Container>
		</footer>
	);
}
