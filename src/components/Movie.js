import { render } from '@testing-library/react';
import React, { Component } from 'react';

class Movie extends Component{
  constructor(props){
    super(props);
    this.state={
      isFavorite:false
    }
  }
  render(){

    const {movie, handleToggle } = this.props;

    return(
      <div className="col-sm-3 video-card center-block embed-responsive-16by9">
        <button
          className={this.state.isFavorite? "love-btn-favorite" : "love-btn"}
          title={movie.title}
          onClick={(e) => { handleToggle(e); 
              this.setState({isFavorite: !this.state.isFavorite})}} 
          //This is an other strategy than listening to event object, 
          //and accesing data via event.target.id for instance.
          style={{
            backgroundColor: "#202020",
            backgroundImage: `url(${this.props.movie.posterUrl}})`,
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
  }
} 

export default Movie;