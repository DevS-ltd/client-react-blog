import axios from 'axios';
import PostModel from '../models/post.model';

class PostService {
	static async getPosts(
		page = 1,
		per_page = 10,
		filter = [],
		sort = 'created_at',
		include = 'author',
	) {
		try {
			const { data } = await axios.get('posts', {
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
		} catch (e) {
			return [];
		}
	}
}

export default PostService;
