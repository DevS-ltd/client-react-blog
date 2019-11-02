import axios from 'axios';

import PostModel from '../models/post.model';
import { API_GET_POST, API_GET_POSTS } from '../constants/api';

class PostService {
	static async getPosts(
		page = 1,
		per_page = 10,
		filter = [],
		sort = 'created_at',
		include = 'author',
	) {
		const { data } = await axios.get(API_GET_POSTS, {
			params: {
				page,
				per_page,
				filter,
				sort,
				include,
			},
		});

		data.data = data.data.map(post => new PostModel(post));

		return data;
	}

	static async getPost(id) {
		const { data } = await axios.get(API_GET_POST(id));

		return new PostModel(data.data);
	}
}

export default PostService;
