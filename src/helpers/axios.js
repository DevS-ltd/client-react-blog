import axios from 'axios';

import { BASE_API_URL } from '../constants/api';

export const setDefaultAxios = () => {
	axios.defaults.baseURL = BASE_API_URL;

	axios.interceptors.response.use(
		response => response,
		error => {
			console.error(error.config.url, error);

			return Promise.reject(error);
		},
	);
};
