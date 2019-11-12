import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline, createMuiTheme } from '@material-ui/core';

import './assets/fonts/Inter/inter.scss';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';

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
