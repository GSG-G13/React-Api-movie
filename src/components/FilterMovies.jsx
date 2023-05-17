import React from "react";

class FilterMovies extends React.Component {


state = {
    filterMovies : ''
}

    handleFilter = (value) => {
        this.setState({filterMovies: value})
        this.props.genresSelected(value)

    }







render() {
    return ( 
        <section id="filter-movies">
            <h2>Select Your Favorite Movie</h2>
            <p>Movies filtered by genres.</p>
            <select
            type="text"
            name="filterMovies"
            onChange={(e) => this.handleFilter(e.target.value)}
            value={this.state.filterMovies}
            >
                <option>All</option>
                <option>Drama</option>
                <option>Action</option>
                <option>Science-Fiction</option>
                <option>Thriller</option>
                <option>Crime</option>
            </select>
            
            
        </section>
        );

}



}


export default FilterMovies;
