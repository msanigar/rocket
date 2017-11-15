/* eslint-disable no-use-before-define */

import store from './store';
import axios from 'axios';
import qs from 'qs';

export const GET_DATA = 'GET_DATA';
export const GOTO_SUB = 'GOTO_SUB';
export const UPDATE_FIELD = 'UPDATE_FIELD';

export function getData() {
	return (dispatch, getState) => {
		getRedditData('all').then(function(response) {
			dispatch({ data: response, type: GET_DATA });
		});
	};
}

export function gotoSub(sub) {
	return (dispatch, getState) => {
		getRedditData(sub).then(function(response) {
			dispatch({ data: response, type: GOTO_SUB });
		});
	};
}

export function updateField(event) {
	return { type: UPDATE_FIELD, event: event.target.value};
}

function getRedditData(sub) {
	return new Promise(function(resolve, reject) {
		axios.get(`https://www.reddit.com/r/${sub}.json`).then(function(response){
			resolve(response ? response : {});
		});
	});
}
