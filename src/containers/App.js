import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';

function App() {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		robots: [], 
	// 		searchfield: ''
	// 	}
	// 	// console.log('constructor');
	// }
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => setRobots(users))
	}, [])
	// componentDidMount() {
	// 	// console.log('check');
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 		.then(response => response.json())
	// 		.then(users => this.setState({robots: users}))
	// 	// this.setState({robots: robots});
	// 	// console.log('didmount');
	// }

	const onSearchChange = (event) => {
		setSearchfield(event.target.value);
		// const filteredRobots = this.state.robots.filter(robot => {
		// 	return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		// })
		// console.log(filteredRobots);
	}

	// const {robots, searchfield} = this.state;
	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})
	// if(!robots.length) {
	// 	return <h1>Loading</h1>
	// } else {
	// 	return (
	// 		<div className = 'tc'>
	// 			<h1 className = 'f1'>Robofriends</h1>
	// 			<SearchBox searchChange = {this.onSearchChange}/>
	// 			<Scroll>
	// 				<CardList robots = {filteredRobots}/>
	// 			</Scroll>
	// 		</div>
	// 	);	
	// }
	return !robots.length ? 
		<h1>Loading</h1> :
		(
			<div className = 'tc'>
				<h1 className = 'f1'>Robofriends</h1>
				<SearchBox searchChange = {onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots = {filteredRobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		);	
	// console.log('render');

}

export default App;