import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

import MovieDetailData from "../containers/detailView/movie-detail-data";
import { fetchSingleMovie } from "../actions";

const Background = styled.div`
  background: url("https://image.tmdb.org/t/p/w1280${props => props.backdropPath}");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  width: 100vw !important;
  height: 100vh;
`;

class MovieDetailContainer extends Component {
  componentDidMount() {
    this.props.fetchSingleMovie(this.props.location.state.movieId);
  }

  render() {
    return (
      <Background backdropPath={this.props.movieDetail.backdrop_path}>
        <div className="movie-details-wrapper">
          <Link to="/">
            <button className="back-button">
              <i className="fas fa-long-arrow-alt-left fa-3x" />
            </button>
          </Link>
          <MovieDetailData movieDetail={this.props.movieDetail} />
        </div>
      </Background>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieDetail: state.singleMovie
  };
}

export default connect(
  mapStateToProps,
  { fetchSingleMovie }
)(MovieDetailContainer);
