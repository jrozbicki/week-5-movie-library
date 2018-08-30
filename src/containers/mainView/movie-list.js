import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  movieItems() {
    if (this.props.movies) {
      return _.map(this.props.movies, movie => {
        return (
          <li id={movie.id} className="movie-list-item" key={movie.id}>
            <Link to={{ pathname: `/movie/${movie.title}`, state: { movieId: movie.id } }}>
              <div className="card">
                <img className="card-img poster" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
                <div className="card-img-overlay">
                  <h3 className="card-title">{movie.title}</h3>
                  <p className="card-text">Avg. rating: {movie.vote_average}</p>
                </div>
              </div>
            </Link>
          </li>
        );
      });
    }
  }

  render() {
    return (
      <Fragment>
        <ul className="list-container">{this.movieItems()}</ul>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(MovieList);
