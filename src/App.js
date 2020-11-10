import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import FavoritesList from "./components/FavoritesList";
import Movie from "./components/Movie";

class App extends Component {
  state = {
    movies: [],
    favorites: []
  };

  fetchVideos = () => {
    axios
      .get("https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json")
      .then(({ data }) => {
        this.setState({ movies: data.movies });
      });
  };

  handleToggle = movie => {
    // this.setState({
    //   favorites: [...this.state.favorites, movie]
    // })

    this.setState(prevState => ({
      favorites: prevState.favorites.includes(movie)
        ? prevState.favorites.filter(favory => favory !== movie)
        : [...prevState.favorites, movie]
    }));
  };

  componentDidMount() {
    this.fetchVideos();
  }

  render() {
    const { movies, favorites } = this.state;

    return (
      <div className="container">
        { favorites.length > 0 && <FavoritesList favorites={favorites} /> }
    
        <div className="col-sm-12">
          {movies.map( movie => (
            <Movie
              movie={movie}
              key={`${movie.id}-movie`}
              handleToggle={this.handleToggle}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App;