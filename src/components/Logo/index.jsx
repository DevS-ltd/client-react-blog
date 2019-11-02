import React from 'react';
import { Link } from 'react-router-dom';
import { Link as MaterialLink, Typography } from '@material-ui/core';

import { DASHBOARD } from '../../constants/urls';

export default function Logo() {
	return (
		<MaterialLink
			color="inherit"
			underline="none"
			component={Link}
			to={DASHBOARD}
		>
			<Typography variant="h6">DevStation Limited</Typography>
		</MaterialLink>
	);
}
