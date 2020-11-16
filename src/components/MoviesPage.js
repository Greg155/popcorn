import React from 'react';
import Movie from './Movie';
import FavoritesList from './FavoritesList';
import axios from 'axios'

class MoviesPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movies: [],
        }
    }
  
    fetchVideos = () => {
        axios
          .get("https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json")
          .then(({ data }) => {
            this.setState({ movies: data.movies });
          });
        
      };
    
    
      componentDidMount() {
        this.fetchVideos();
      }
      
      componentDidUpdate(){
        console.log(this.props.favoriteList);
      
      }

    render(){

        const { movies } = this.state;
        const { favoriteList } = this.props;

        return(
            <div className="container">
            {/* Just a conditional rendering */}
            { favoriteList.length > 0 && <FavoritesList favoriteList={favoriteList} /> }
        
            <div className="col-sm-12">
              {/* It is possible to remove the parentheses of (movie) => .. if there is only one argument in the func.  */}
              {movies.map( movie => (
                <Movie
                  // {...movie} --> Not our srategy this time, but check this out, it would create a props with the name of each keys of the movie object.
                  movie={movie}
                  isFavorite={favoriteList.includes(movie)}
                  key={`${movie.id}-movie`}
                  handleToggle={this.props.handleToggle}
                />
              ))}
            </div>
          </div>
        );  
    }
}

export default MoviesPage