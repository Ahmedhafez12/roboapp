//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
 import RoboticParent from '../components/RoboticParent';
//import { robots } from './robots' ;
import Scroll from '../components/Scroll';
import ErrorBoundaries from '../components/ErrorBoundaries';
import { connect } from 'react-redux';
//import { searchRobots } from '../reducer';
import { setSearchField } from '../actions'

//import 'tachyons';


const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}


class App extends Component {
  constructor(){ 
    super();
    this.state = {
      robots: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
  }

  render(){ 
    var {robots} = this.state; 
    var {searchField, onSearchChange} = this.props;  
    var filterRobotics = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
       return !robots.length?
       <h1> Loading </h1>:
       <body>
          <div className='tc'>
              <h1 className='f1 navy'> ANTIROBOTICS</h1>
              <SearchBar searchChange = {onSearchChange}/> 
              <Scroll> 
                <ErrorBoundaries>
                  <RoboticParent robots = {filterRobotics}/>
                </ErrorBoundaries>
              </Scroll> 
          </div> 
        </body>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
