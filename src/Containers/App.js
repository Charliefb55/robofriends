import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary'
import './App.css'

//This function needs to be a class so that it can change the state of the
// and pass that state to the child functions
class App extends React.Component {
	//we use a constructor to create the state of the program
	constructor() {
		//in order to call this.state we need to call super() which is the 
		//component class in react
		super()
		//this will now create the state for robots and searchfield
		//which will be passed to the child functions
		this.state = {
			robots: [],
			searchField: '',
		}
	}

	//This function is built into react and automatically runs when the app is
	//loaded. here wew are calling the lists of users from the api, converting
	//converting it to json and set the state of the robots array
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=> this.setState({robots: users}));
	}

	//this is a function that changes the state of the searchfield based
	//on the value of the searchfield
	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value})
	}
	//components must be rendered
	render () {
		//this function creates a new array based on the input given in the
		//searchfield by filtering the robots array based on the robots name
		//using the includes method. 
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})
		return (
			<div className='tc'>
				<h1 className='f1'>Robofriends</h1>
				{/*passes the onsearchchange function to the searchbox so that
				//when the there is a change in the input the function will run
				//and change the state of the searchfield*/}
				<SearchBox searchChange={this.onSearchChange} />
				{/*//we communicate with the cardlist to create a new array using
				//filteredRobots function based on the input of the searchbar*/}
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

export default App;