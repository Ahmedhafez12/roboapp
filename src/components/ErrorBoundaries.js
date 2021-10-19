import React , {Component} from 'react';

class ErrorBoundaries extends Component{
	constructor(props){
		super(props)
		this.state = {
			isError : false 
		}
	}
	componentDidCatch(error, info){
			return	this.setState({isError: true});
	}
	render(){
		if (this.state.isError)
			return <h1> There is an error with the website </h1>;
		return this.props.children; 
	}
}
export default ErrorBoundaries; 

	



