import React from "react";
import { useParams } from "react-router-dom";
import MovieDescription from "./MovieDescription";

function HomePage(props) {
  const { movieId } = useParams();
  const { favoriteList } = props;

  const movieToShow = favoriteList.filter(
    (element) => element.id === parseInt(movieId)
  );
  console.log(movieToShow);

  return !movieToShow.length ? (
    <div>No movies </div>
  ) : (
    <MovieDescription movie={movieToShow[0]} />
  );
}
export default HomePage;
