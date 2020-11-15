import React from 'react'

class MovieDescription extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const movie = this.props.movie;
        console.log(movie);
        console.log(movie.title);
        return(
            <div>
                <p>Title : {movie.title}</p>
                <p>Plot : {movie.plot}</p>
                <p>Actors : {movie.actors}</p>
                <p>Director : {movie.director}</p>

            </div>
        )
    }

}
export default MovieDescription;