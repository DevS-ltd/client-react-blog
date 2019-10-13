import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import MaterialLink from '@material-ui/core/Link';
import ListItemText from '@material-ui/core/ListItemText';

import Logo from '../../../Logo';
import { BLOG, CONTACTS, LOGIN, REGISTER } from '../../../../constants/urls';

export default function SideList() {
	return (
		<List>
			<ListItem button>
				<Logo />
			</ListItem>
			<Divider />
			<ListItem button>
				<MaterialLink
					color="inherit"
					underline="none"
					component={Link}
					to={BLOG}
				>
					<ListItemText primary="Blog" />
				</MaterialLink>
			</ListItem>
			<ListItem button>
				<MaterialLink
					color="inherit"
					underline="none"
					component={Link}
					to={CONTACTS}
				>
					<ListItemText primary="Contacts" />
				</MaterialLink>
			</ListItem>
			<Divider />
			<ListItem button>
				<MaterialLink
					color="inherit"
					underline="none"
					component={Link}
					to={LOGIN}
				>
					<ListItemText primary="Login" />
				</MaterialLink>
			</ListItem>
			<ListItem button>
				<MaterialLink
					color="inherit"
					underline="none"
					component={Link}
					to={REGISTER}
				>
					<ListItemText primary="Sign up for Free" />
				</MaterialLink>
			</ListItem>
		</List>
	);
}
