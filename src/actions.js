import {CHANGE_SEARCHFIELD, 
ROBOT_REQUEST_ISPENDING, 
ROBOT_REQUEST_SUCCESS, 
ROBOT_REQUEST_ERROR} from './constants';


export const setSearchField = (text) => ({
	type: CHANGE_SEARCHFIELD,
	payload: text 
})
export const requestRobots = () => (dispatch) => { 
	dispatch({type: ROBOT_REQUEST_ISPENDING});
	fetch('https://jsonplaceholder.typicode.com/users')
	    .then(response => response.json())
	    .then(data => dispatch({type: ROBOT_REQUEST_SUCCESS , payload: data}))
	    .catch(error => dispatch({type: ROBOT_REQUEST_ERROR, payload: error}));

}
