import BaseModel from './base.model';

class UserModel extends BaseModel {
	constructor(data = {}) {
		super();
		data = data || {};

		this.id = data.id || '';
		this.name = data.name || '';
	}
}

export default UserModel;
