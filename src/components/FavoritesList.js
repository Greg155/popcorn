const FavoritesList = ({ favoriteList }) => (
  <div className="jumbotron jumbotron-fluid">
    <div className="favorites_container">
      {favoriteList.map((movie) => (
               
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