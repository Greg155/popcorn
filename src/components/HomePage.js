import React from 'react';
import MovieDescription from './MovieDescription';

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isHidden : true,
            random: 0,
        }
        this.handleRandom = this.handleRandom.bind(this);
    }


    handleRandom(){
        if(this.props.favoriteList.length > 0){
            let indexMax = this.props.favoriteList.length - 1;
            let rnd = 1 + Math.random() * (indexMax - 1);
            rnd = Math.round(rnd);
            this.setState({random : rnd});
        }

        this.setState({isHidden: !this.state.random})

    }

    render(){

        

        return(
            <div>
                <h1>HomePage</h1>
                <h2>Get a random Movie !</h2>
                <button onClick={this.handleRandom}>
                    Random
                </button>
                            
                {this.state.isHidden ? "" : <MovieDescription movie={this.props.favoriteList[this.state.random]} />}

            </div>
        )
    }




}
export default HomePage;