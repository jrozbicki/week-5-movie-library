import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchGenres } from "../actions/index.js";

class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchGenres();
  }

  showMovie(e) {
    const movie = _.find(this.props.movies, obj => {
      return obj.id == e.target.parentNode.id;
    });
  }

  showGenres(genres) {
    console.log(this.props.genres);
    console.log(genres);
  }

  movieItems() {
    if (this.props.movies) {
      return _.map(this.props.movies, movie => {
        return (
          <li id={movie.id} className="movie-list-item" key={movie.id} onClick={this.showMovie.bind(this)}>
            <div className="card">
              <img className="card-img poster" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
              <div className="card-img-overlay">
                <h3 className="card-title">{movie.title}</h3>
                <p className="card-text">Avg. rating: {movie.vote_average}</p>
                <p className="card-text">{this.showGenres(movie.genre_ids)}</p>
              </div>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGenres }, dispatch);
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    genres: state.genres
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
