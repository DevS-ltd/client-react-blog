import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { isWidthUp } from '@material-ui/core/withWidth';
import { Grid, IconButton, withWidth } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

class Carousel extends React.Component {
	render() {
		const { photos, width } = this.props;
		return (
			<Grid container>
				{isWidthUp('md', width) && (
					<Grid container item alignItems="center" justify="center" md={1}>
						<IconButton onClick={() => this.carousel.slidePrev()}>
							<ArrowBackIos />
						</IconButton>
					</Grid>
				)}
				<Grid item xs={12} md={10}>
					<AliceCarousel
						dotsDisabled={true}
						buttonsDisabled={true}
						ref={el => (this.carousel = el)}
					>
						{photos.map(photo => (
							<img
								key={photo.id}
								src={photo.url}
								style={{ width: '100%' }}
								alt=""
							/>
						))}
					</AliceCarousel>
				</Grid>
				{isWidthUp('md', width) && (
					<Grid container item alignItems="center" justify="center" md={1}>
						<IconButton onClick={() => this.carousel.slideNext()}>
							<ArrowForwardIos />
						</IconButton>
					</Grid>
				)}
			</Grid>
		);
	}
}

export default withWidth()(Carousel);
