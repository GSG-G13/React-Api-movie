import React from "react";

class FilterMovies extends React.Component {
  state = {
    filterMovies: "All",
  };

  handleFilter = (value) => {
    this.setState({ filterMovies: value });
    this.props.genresSelected(value); 
  };

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
          <option value="All">All</option>
          <option value="Drama">Drama</option>
          <option value="Action">Action</option>
          <option value="Science-Fiction">Science-Fiction</option>
          <option value="Thriller">Thriller</option>
          <option value="Crime">Crime</option>
        </select>
      </section>
    );
  }
}

export default FilterMovies;
