import { GET_DATA, UPDATE_FIELD, UPDATE_READY } from "./actions";

import axios from 'axios';

export function getPosts(sub) {
	return (dispatch, getState) => {    
        dispatch({ event: false, type: UPDATE_READY });
		getRedditData(sub ? sub : 'all').then(function(response) {
            dispatch({ data: response, type: GET_DATA });
            dispatch({ event: true, type: UPDATE_READY });
        });
        
		function getRedditData(sub) {
			return new Promise(function(resolve, reject) {
				axios.get(`https://www.reddit.com/r/${sub}.json`).then(function(response){
                    if(response.status === 200) {
                        resolve(response ? response : {})
                    }
				}).catch(function(err) {
                    axios.get(`https://www.reddit.com/r/all.json`).then(function(response){
                        resolve(response ? response : {})
                    });
                }); 
            });
        }
        
	};
}

export function updateSub(event) {
	return { type: UPDATE_FIELD, event: event.target.value};
}

export function updateReady(event) {
    return { type: UPDATE_READY, event: event};
}