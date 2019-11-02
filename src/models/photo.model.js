import BaseModel from './base.model';

class PhotoModel extends BaseModel {
	constructor(data = {}) {
		super();
		data = data || {};

		this.id = data.id || '';
		this.url = data.url || '';
	}
}

export default PhotoModel;
