import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MoviesPage from "./components/MoviesPage";
import HomePage from "./components/HomePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteList: []
    }

    this.randomMovie = this.randomMovie.bind(this);
  }

  randomMovie(array){
    console.log("hey app :",array);
    this.setState({favoriteList: array});
  }


  render() {
    
    return (
      <Router>
        <nav>
          <ul>
            <li>
             <Link to="/HomePage">Home Page</Link>
            </li>
            <li>
             <Link to="/">Movies Main Page</Link>
            </li>
          </ul>
        </nav>
     
        <Switch>
          <Route path="/HomePage">
            <HomePage favoriteList={this.state.favoriteList}/>
          </Route>
          <Route exact path="/">
            <MoviesPage randomMovie={this.randomMovie}/>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;