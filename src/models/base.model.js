class BaseModel {
	formatDate = date => {
		if (Boolean(date) === false) return '';

		date = new Date(date);
		return `${date.toLocaleString('en', {
			month: 'long',
		})} ${date.getDate()}, ${date.getFullYear()}`;
	};
}

export default BaseModel;
