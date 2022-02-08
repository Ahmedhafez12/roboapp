import {CHANGE_SEARCHFIELD, 
ROBOT_REQUEST_ISPENDING, 
ROBOT_REQUEST_SUCCESS, 
ROBOT_REQUEST_ERROR} from './constants';

const initialState = {
	searchField: ''
}
export const searchRobots = (state = initialState , action = {}) => {
	switch(action.type){
		case CHANGE_SEARCHFIELD:
			return Object.assign({}, state , {searchField: action.payload}) ; 
		default: 
			return state;
	}
}
const initialRobotState = {
	isPending: false, 
	robots: [],
	error: ''
}

export const requestRobots = (state = initialRobotState , action = {}) => {
	switch(action.type){
		case ROBOT_REQUEST_ISPENDING: 
			return Object.assign({}, state, {isPending: true}); 
		case ROBOT_REQUEST_SUCCESS: 
			return Object.assign({}, state, {robots: action.payload , isPending: false}); 
		case ROBOT_REQUEST_ERROR:
			return Object.assign({}, state, {error: action.payload , isPending: false }); 
		default:
			return state; 
	}
}

