import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import FavoritesList from "./components/FavoritesList";
import Movie from "./components/Movie";

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     movies: [],
  //     favorites: []
  //   };
  // }

  // This is equivalent as initiating the state in constructor phase ->

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
    // This work to add a favorite but not to toggle one from the list
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
    // Is not it cleaner to make our apis call in a separate method ?
    this.fetchVideos();
  }

  render() {
    const { movies, favorites } = this.state;

    return (
      <div className="container">
        {/* Just a conditional rendering */}
        { favorites.length > 0 && <FavoritesList favorites={favorites} /> }
    
        <div className="col-sm-12">
          {/* It is possible to remove the parentheses of (movie) => .. if there is only one argument in the func.  */}
          {movies.map( movie => (
            <Movie
              // {...movie} --> Not our srategy this time, but check this out, it would create a props with the name of each keys of the movie object.
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