/* eslint-disable no-use-before-define */

import store from './store';
import axios from 'axios';
import qs from 'qs';

export const GET_DATA = 'GET_DATA';

export function getData() {
	return (dispatch, getState) => {
		getRedditData().then(function(response) {
			dispatch({ data: response, type: GET_DATA });
		});
	};
}

function getRedditData() {
	return new Promise(function(resolve, reject) {
		axios.get('https://www.reddit.com/r/all.json').then(function(response){
			resolve(response ? response : {});
		});
	});
}
