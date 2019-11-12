import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, CircularProgress } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const LoaderWrapper = styled(Grid)({
	position: 'absolute',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	background: 'rgba(255, 255, 255, 0.6)',
	zIndex: 10000,
});

const loaderDOMElement = document.getElementById('loader');

class Loader extends React.Component {
	el = document.createElement('div');

	componentDidMount() {
		loaderDOMElement.appendChild(this.el);
	}

	componentWillUnmount() {
		loaderDOMElement.removeChild(this.el);
	}

	render() {
		return ReactDOM.createPortal(
			<LoaderWrapper container justify="center" alignItems="center">
				<CircularProgress />
			</LoaderWrapper>,
			this.el,
		);
	}
}

export default Loader;
