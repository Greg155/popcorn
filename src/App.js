import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MoviesPage from "./components/MoviesPage";
import HomePage from "./components/HomePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteList: [],
      random: 0,
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleRandomIndex = this.handleRandomIndex.bind(this);
  }

  randomMovie(array) {
    this.setState({ favoriteList: array });
  }

  handleToggle = (movie) => {
    this.setState((prevState) => ({
      favoriteList: prevState.favoriteList.includes(movie)
        ? prevState.favoriteList.filter((favory) => favory !== movie)
        : [...prevState.favoriteList, movie],
    }));
  };

  handleRandomIndex() {
    if (this.state.favoriteList.length === 0) {
      return 0;
    } else {
      const randomId = Math.round(
        Math.random() * (this.state.favoriteList.length - 1)
      );
      this.setState({ random: randomId });
    }
  }

  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link
                to={`/random/${
                  this.state.favoriteList.length &&
                  this.state.favoriteList[this.state.random].id
                }`}
                onClick={this.handleRandomIndex}
              >
                Random
              </Link>
            </li>
            <li>
              <Link to="/">Movies Main Page</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/random/:movieId">
            <HomePage favoriteList={this.state.favoriteList} />
          </Route>
          <Route exact path="/">
            <MoviesPage
              favoriteList={this.state.favoriteList}
              handleToggle={this.handleToggle}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
