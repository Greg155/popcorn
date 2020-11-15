import React from 'react';
import Movie from './Movie';
import FavoritesList from './FavoritesList';
import axios from 'axios'

class MoviesPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movies: [],
            favorites: []
        }
    }
  
    fetchVideos = () => {
        axios
          .get("https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json")
          .then(({ data }) => {
            this.setState({ movies: data.movies });
            this.setState({ movies: this.state.movies.map((elem) => 
              elem.title === elem.title ? { ...elem, isFavorite: false } : elem)})
          });
        
      };
    
      handleToggle = (movie) => {
        // This work to add a favorite but not to toggle one from the list
        // this.setState({
        //   favorites: [...this.state.favorites, movie]
        // })
        let movieToUpdate;
        this.state.movies.map((item) => {
          if(item.title === movie.target.title){
            item.isFavorite = !item.isFavorite;
            movieToUpdate = item;
          }
        })
    
        this.setState(prevState => ({
          favorites: prevState.favorites.includes(movieToUpdate)
            ? prevState.favorites.filter(favory => favory.title !== movieToUpdate.title)
            : [...prevState.favorites, movieToUpdate]
        }));
        
        this.props.randomMovie(this.state.favorites);

      };
    
      componentDidMount() {
        this.fetchVideos();
      }
      
      componentDidUpdate(){
        console.log(this.state.favorites);
      
      }

    render(){

        const { movies, favorites } = this.state;

        return(
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
        );  
    }
}

export default MoviesPage