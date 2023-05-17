import React from 'react';
import AllMovies from './components/AllMovies';
import Header from './components/Header'
import CoverMovies from './components/CoverMovies';
import FilterMovies from './components/FilterMovies';
import MovieInfo from './components/MovieInfo';
import Search from './components/Search';
import './App.css';


class App extends React.Component{
  state = {
    movieInfo : {},
    movie:null,
    genre:'All',
    data:[]
  }
  
  movieSelected = (id, name) => {
    this.setState({ movieSelected: { id, name } })
  }

  movie = (id, name) => {
    this.setState({ movie: { id, name } })
  }
  setData = (cb) => {
    const newData=cb(this.state.data)
    this.setState({data:newData})
    
  }

  genresSelected = ( genres) => {
    console.log(genres)
  this.setState( { genres : genres   })
}
  render(){
    return (
      <>
        <Header  data={this.state.data}/>
        <CoverMovies/>
        <Search movieSelected = {this.movieSelected}/>
        <MovieInfo  movie={this.state.movieSelected} setData={this.setData}/>
     <FilterMovies genresSelected={this.genresSelected} />
      <AllMovies genres={this.state.genre}/>

      

      </>

    )

  }


}

export default App;