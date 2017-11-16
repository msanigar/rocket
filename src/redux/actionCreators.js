import { GET_DATA, UPDATE_FIELD } from "./actions";

import axios from 'axios';

export function getPosts(sub) {
	return (dispatch, getState) => {
		getRedditData(sub ? sub : 'all').then(function(response) {
			dispatch({ data: response, type: GET_DATA });
		});
		function getRedditData(sub) {
			return new Promise(function(resolve, reject) {
				axios.get(`https://www.reddit.com/r/${sub}.json`).then(function(response){
					resolve(response ? response : {});
				});
			});
		}
	};
}

export function updateSub(event) {
	return { type: UPDATE_FIELD, event: event.target.value};
}
