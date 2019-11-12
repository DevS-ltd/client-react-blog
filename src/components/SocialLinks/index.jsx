import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import {
	FacebookIcon,
	GithubIcon,
	LinkedinIcon,
	SkypeIcon,
	TelegramIcon,
	ViberIcon,
	WhatsappIcon,
} from '../Icons';

const useStyles = makeStyles(theme => ({
	icon: {
		fillRule: 'evenodd',
		fill: '#ccc',
		'&:hover': {
			fill: '#aaa',
		},
	},
}));

const socialLinks = [
	{
		link: process.env.REACT_APP_SOCIAL_FACEBOOK,
		icon: FacebookIcon,
	},
	{
		link: process.env.REACT_APP_SOCIAL_LINKEDIN,
		icon: LinkedinIcon,
	},
	{
		link: process.env.REACT_APP_SOCIAL_GITHUB,
		icon: GithubIcon,
	},
	{
		link: process.env.REACT_APP_SOCIAL_SKYPE,
		icon: SkypeIcon,
	},
	{
		link: process.env.REACT_APP_SOCIAL_WHATSAPP,
		icon: WhatsappIcon,
	},
	{
		link: process.env.REACT_APP_SOCIAL_TELEGRAM,
		icon: TelegramIcon,
	},
	{
		link: process.env.REACT_APP_SOCIAL_VIBER,
		icon: ViberIcon,
	},
];

export default function() {
	const classes = useStyles();
	return socialLinks.map(
		({ link, icon: Icon }, key) =>
			Boolean(link) && (
				<Grid key={key} item>
					<a href={link} target="_blank" rel="noopener noreferrer">
						<Icon className={classes.icon} />
					</a>
				</Grid>
			),
	);
}
