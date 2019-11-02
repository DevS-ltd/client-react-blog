import React from 'react';
import { Button, Container, Grid, withStyles } from '@material-ui/core';

import FeedCard from './FeedCard';
import FeedLoader from './FeedLoader';
import PostService from '../../services/post.service';
import { META, LINKS } from '../../constants/pagination';

const useStyles = theme => ({
	more: {
		padding: '1.5rem',
	},
});

class Blog extends React.Component {
	state = {
		posts: [],
		meta: META,
		links: LINKS,
		isLoading: false,
	};

	componentDidMount() {
		this.getPosts();
	}

	render() {
		const { posts, meta, isLoading } = this.state;

		return (
			<Container>
				{posts.map(post => (
					<FeedCard key={post.id} post={post} />
				))}
				{isLoading && <FeedLoader />}
				{posts.length < meta.total && (
					<Grid container justify="center" className={this.props.classes.more}>
						<Button
							disabled={isLoading}
							color="primary"
							variant="contained"
							onClick={this.loadMorePosts}
						>
							Load more
						</Button>
					</Grid>
				)}
			</Container>
		);
	}

	loadMorePosts = () => {
		this.setState(
			{
				isLoading: true,
			},
			() => this.getPosts(this.state.meta.current_page + 1),
		);
	};

	getPosts = async (page = 1) => {
		this.setState({
			isLoading: true,
		});
		const { data: posts, meta, links } = await PostService.getPosts(page);

		this.setState(state => ({
			posts: [].concat(state.posts, posts),
			meta: { ...state.meta, ...meta },
			links: { ...state.links, ...links },
			isLoading: false,
		}));
	};
}

export default withStyles(useStyles)(Blog);
