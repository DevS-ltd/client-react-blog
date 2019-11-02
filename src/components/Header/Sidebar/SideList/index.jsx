import React from 'react';
import { Link } from 'react-router-dom';
import {
	List,
	Divider,
	ListItem,
	ListItemText,
	Link as MaterialLink,
} from '@material-ui/core';

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
