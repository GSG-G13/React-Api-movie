import React from 'react';
import AllMovies from './components/AllMovies';
import CoverMovies from './components/CoverMovies';
import FavoriteList from './components/FavoriteList';
import FavoriteMovie from './components/FavoriteMovie';
import FilterMovies from './components/FilterMovies';
import MovieInfo from './components/MovieInfo';
import Search from './components/Search';
import SearcResult from './components/SearcResult';
import './App.css';


class App extends React.Component{
  state = {
    movieInfo : {},
    movie:null,
    genre:'All',
    data:[]
  }

  movie = (id, name) => {
    this.setState({ movie: { id, name } })
  }
  setData = (cb) => {
    const newData=cb(this.state.data)
    this.setState({data:newData})
    
  }

  genreSelected = ( genre) => {
    console.log(genre)
  this.setState( { genre : genre   })
}
  render(){
    return (
      <>
          <AllMovies genres={this.state.genre}/>

      

      </>

    )

  }


}

export default App;