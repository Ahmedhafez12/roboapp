//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
 import RoboticParent from '../components/RoboticParent';
//import { robots } from './robots' ;
import Scroll from '../components/Scroll';
import ErrorBoundaries from '../components/ErrorBoundaries';
import { connect } from 'react-redux';
//import { searchRobots, requestRobots} from '../reducer';
import { setSearchField, requestRobots} from '../actions';

//import 'tachyons';


const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField, 
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending, 
    error: state.requestRobots.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)), 
    onRequestRobots: () => dispatch(requestRobots())
  }
}


class App extends Component {

  componentDidMount(){
    this.props.onRequestRobots();
  }

  render(){ 
    //console.log(requestRobots());
   // var {robots} = this.state; 
    var {searchField, onSearchChange, robots, isPending} = this.props;  
    var filterRobotics = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
       return isPending?
       <h1> Loading </h1>:
        <div className='tc'>
              <h1 className='f1 navy'> ANTIROBOTICS</h1>
              <SearchBar searchChange = {onSearchChange}/> 
              <Scroll> 
                <ErrorBoundaries>
                  <RoboticParent robots = {filterRobotics}/>
                </ErrorBoundaries>
              </Scroll> 
        </div> 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
