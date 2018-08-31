import React, { Component, Fragment } from "react";

class MovieDetailData extends Component {
  releaseYear() {
    if (this.props.movieDetail.release_date) {
      return this.props.movieDetail.release_date.substr(0, 4);
    }
  }

  renderGenres() {
    if (this.props.movieDetail.release_date) {
      return this.props.movieDetail.genres
        .map(obj => {
          return obj.name;
        })
        .join(" • ");
    }
  }

  renderTrailer() {
    if (this.props.trailers.results) {
      console.log(this.props.trailers.results);
      const key = _.find(this.props.trailers.results, { type: "Trailer" }).key;
      return (
        <Fragment>
          <iframe type="text/html" width="420" height="315" src={`https://www.youtube.com/embed/${key}`} />
        </Fragment>
      );
    }
  }

  render() {
    return (
      <div className="movie-details-container">
        <div className="poster-container">
          <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${this.props.movieDetail.poster_path}`} />
        </div>
        <div className="right-container">
          <div className="title-rating">
            <div className="movie-title-container">
              <h1>
                {this.props.movieDetail.title} ({this.releaseYear()})
              </h1>
            </div>
            <div className="rating-votes">
              <h1>{this.props.movieDetail.vote_average}</h1>
              <i className="fas fa-star fa-2x" />
              <h3>({this.props.movieDetail.vote_count})</h3>
            </div>
          </div>
          <div className="description">
            <h4>Description</h4>
            <p>{this.props.movieDetail.overview}</p>
          </div>
          <div className="genres">
            <h4>Genres:</h4>
            <p>{this.renderGenres()}</p>
          </div>
          <div className="trailer">
            <h4>Trailer:</h4>
            {this.renderTrailer()}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetailData;
