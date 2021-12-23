import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import { robots } from '../robots';
import "./App.css";
import Scroll from '../components/Scroll';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ""
		}
	}

	componentDidMount() {

	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}
	render() {
		const filteredRobotNames = this.state.robots.filter(robot => {
		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		const filteredRobotEmails = this.state.robots.filter(robot => {
		return robot.email.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		const filteredRobots = filteredRobotNames.concat(filteredRobotEmails.filter((item) => filteredRobotNames.indexOf(item) < 0));


		return(
			<div className="tc">
				<h1>React Robots</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);
	}
}



export default App;