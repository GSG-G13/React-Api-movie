import React from "react";
class AllMovies extends React.Component {
    state = {
        allMovies : []
    }
    componentDidMount() {
        fetch(`https://api.tvmaze.com/shows`)
        .then((res) => res.json())
        .then((data)=> {
            this.setState({allMovies: data})
        })
    }
    
    buildSection = (ele) => {
        return <div key={ele.id} className="card card-1">
            <img src={ele.image?.original} alt="hh" className="imgCard"/>
            
        
        <a href={ele.url} className="card-link">
        <div className="card-img-hovered" style={{backgroundImage: `url(${ele.image?.original})`}} >

        </div>
        </a>
    
        <div className="card-info">
            <div className="card-about">
                
                {ele.genres.map((ele, i)=> <a key={i} href="https://www.netflix.com/ps-en/" className="card-tag tag-news">{ele +' '}</a>)}
            <div className="card-time">rating: {ele.rating.average}</div>
        </div>
        <h3 className="card-title">{ele.name}</h3>
        <div className="card-creator">
            by <a href="s">Netflix</a>
        </div>
    </div>
    </div>
        }

  render() {
    const genres = this.props.genres

    let elements = [];
    

    if(genres === 'All') {
        elements = this.state.allMovies.map(mov => {
           return this.buildSection(mov)
        })   
    } else if(genres !== "All") {
        elements = this.state.allMovies.filter(mov => {
            return mov.genres.includes(genres)
        }).map(mov => {
            return this.buildSection(mov)
         })
    }
    
    else{
        <h1>Loading ...</h1>
    }
    

    if(!this.state.allMovies){
        return <h1>Loading ...</h1>
    }

    return (
        <div className="card-container">
        {elements}
    </div>
    )}
}

export default AllMovies;