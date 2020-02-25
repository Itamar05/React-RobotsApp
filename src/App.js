import React, { Component } from 'react'
import './App.css';
import CardList from './components/cardlist/CardList'
import 'tachyons' ;
import Scroll from './Scroll'
import SearchBox from './components/searchbox/SearchBox';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(users => this.setState({robots: users}))
  }

  onSearchChange = (event) => {
      this.setState({searchfield: event.target.value})
  }

  render() {

    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())

      })

      if (this.state.robots.length === 0) {
        return <h2>loading</h2>
      } else {
        return (
          <div className="tc"> 
          <h1 className="title">RobotFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <CardList robots={filteredRobots} />
            </Scroll>
          </div> )
      }   
  }
}

export default App