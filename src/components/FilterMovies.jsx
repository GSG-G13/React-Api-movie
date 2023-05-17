import React from "react";

class FilterMovies extends React.Component {




  render() {
    const {handleSelect} = this.props
    return (
      <section id="filter-movies">
        <h2>Select Your Favorite Movie</h2>
        <div className="filterN">
        <p>Movies filtered by genres.</p>
        <select
          type="text"
          name="filterMovies"
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Drama">Drama</option>
          <option value="Action">Action</option>
          <option value="Science-Fiction">Science-Fiction</option>
          <option value="Thriller">Thriller</option>
          <option value="Crime">Crime</option>
        </select>
        </div>
      </section>
    );
  }
}

   


export default FilterMovies;
