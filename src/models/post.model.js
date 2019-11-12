import BaseModel from './base.model';
import UserModel from './user.model';
import PhotoModel from './photo.model';

class PostModel extends BaseModel {
	constructor(data = {}) {
		super();
		data = data || {};

		this.id = data.id || '';
		this.title = data.title || '';
		this.content = data.content || '';
		this.annotation = data.annotation || '';
		this.author = new UserModel(data.author || {});
		this.created_at = this.formatDate(data.created_at || '');
		this.photos = Array.isArray(data.photos)
			? data.photos.map(photo => new PhotoModel(photo))
			: [];
	}
}

export default PostModel;
