import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {
  movieItems() {
    if(this.props.movies){
      return this.props.movies.map((movie) => {
        return <li className="movie-list-item" key={movie.id}>
            {<img className="poster" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />}
          </li>;
      });
    }
}

  render() {
    return (
      <div>
        <ul className="list-container">
          {this.movieItems()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(MovieList);



