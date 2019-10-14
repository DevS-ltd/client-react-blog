import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';

import './assets/fonts/Inter/inter.scss';

import Routes from './components/Routes';

const theme = createMuiTheme({
	typography: {
		fontFamily: '"Inter", sans-serif',
	},
});

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</ThemeProvider>
	);
}
