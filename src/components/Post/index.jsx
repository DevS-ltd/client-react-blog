import React from 'react';
import { withRouter } from 'react-router-dom';
import {
	Box,
	Container,
	CircularProgress,
	Grid,
	withStyles,
} from '@material-ui/core';

import PostMeta from './PostMeta';
import Carousel from '../Carousel';
import PostTitle from './PostTitle';
import { BLOG } from '../../constants/urls';
import PostModel from '../../models/post.model';
import PostService from '../../services/post.service';

const useStyles = theme => ({
	loaderWrapper: {
		minHeight: '100%',
	},
	contentWrapper: {
		padding: '2rem 0',
	},
});
class Post extends React.Component {
	state = {
		post: new PostModel(),
		isLoading: false,
	};

	componentDidMount() {
		this.getPost();
	}

	render() {
		const { post, isLoading } = this.state;
		const { classes } = this.props;

		return (
			<Container>
				{isLoading ? (
					<Grid
						container
						justify="center"
						alignContent="center"
						direction="column"
						className={classes.loaderWrapper}
					>
						<CircularProgress />
					</Grid>
				) : (
					<Grid container justify="center">
						<Grid item xs={12} md={8}>
							<Carousel photos={post.photos} />
							<Box className={classes.contentWrapper}>
								<PostTitle post={post} />
								<PostMeta post={post} />
								<Box dangerouslySetInnerHTML={{ __html: post.content }} />
							</Box>
						</Grid>
					</Grid>
				)}
			</Container>
		);
	}

	getPost = async () => {
		try {
			this.setState(
				{
					isLoading: true,
				},
				async () =>
					this.setState({
						post: await PostService.getPost(this.props.match.params.postId),
						isLoading: false,
					}),
			);
		} catch (e) {
			this.props.history.push(BLOG);
		}
	};
}

export default withRouter(withStyles(useStyles)(Post));
