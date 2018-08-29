import React, { Component } from "react";
import { connect } from "react-redux";

class MovieList extends Component {
  showDetails(e) {
    const id = e.target.parentNode.id;
    this.props.movies.filter();
  }

  movieItems() {
    if (this.props.movies) {
      return this.props.movies.map(movie => {
        return (
          <li id={movie.id} className="movie-list-item" key={movie.id} onMouseEnter={this.showDetails}>
            <div className="image-container">
              {<img className="poster" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />}
            </div>
          </li>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <ul className="list-container">{this.movieItems()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(MovieList);
