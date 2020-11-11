const Movie = ({ movie, handleToggle }) => (
  <div className="col-sm-3 video-card center-block embed-responsive-16by9">
    <button
      className={"btn love-btn center-block"}
      title={movie.title}
      onClick={() => handleToggle(movie)} //This is an other strategy than listening to event object, and accesing data via event.target.id for instance.
      style={{
        backgroundColor: "#202020",
        backgroundImage: `url(${movie.posterUrl}})`,
        width: "100%",
        height: "156px",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        margin: "6px 6px"
      }}
      // Special challenge: is it possible to get the error event occuring on css loading ?
    >
      <span className="glyphicon glyphicon-heart"></span>
    </button>
  </div>
);

export default Movie;
