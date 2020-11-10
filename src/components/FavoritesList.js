const FavoritesList = ({ favorites }) => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      {favorites.map((movie) => (
        <img
          className="poster"
          key={`${movie.id}-poster`}
          src={movie.posterUrl}
          alt={movie.title}
          onError={event => {
            event.target.src =
              "https://media.giphy.com/media/qQH8uZqTxnRIc/giphy.gif";
          }}
        />
      ))}
    </div>
  </div>
);

export default FavoritesList;