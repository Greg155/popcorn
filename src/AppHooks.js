import React, { Component, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MoviesPage from "./components/MoviesPage";
import HomePage from "./components/HomePage";

function App(props) {
  const [favoriteList, setFavoriteList] = useState([]);
  const [random, setRandom] = useState(0);

  const handleToggle = (movie) => {
    // if (favoriteList.includes(movie)) {
    //   setFavoriteList(favoriteList.filter((favory) => favory !== movie));
    // } else {
    //   setFavoriteList((prev) => [...prev, movie]);
    // }

    setFavoriteList((prevState) => {
      if (prevState.includes(movie)) {
        return prevState.filter((favory) => favory !== movie);
      } else {
        return [...prevState, movie];
      }

      //   prevState.includes(movie)
      //     ? prevState.filter((favory) => favory !== movie)
      //     : [...prevState, movie];
    });
  };

  const handleRandomIndex = () => {
    if (favoriteList.length === 0) {
      return 0;
    } else {
      const randomId = Math.round(Math.random() * (favoriteList.length - 1));
      setRandom(randomId);
    }
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link
              to={`/random/${favoriteList.length && favoriteList[random].id}`}
              onClick={handleRandomIndex}
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
          <HomePage favoriteList={favoriteList} />
        </Route>
        <Route exact path="/">
          <MoviesPage favoriteList={favoriteList} handleToggle={handleToggle} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
