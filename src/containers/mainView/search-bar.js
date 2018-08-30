import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchMovie } from "../../actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { input: "" };
  }

  onInputChange(e) {
    this.setState({ input: e.target.value });
    if (e.target.value) {
      this.props.fetchMovie(e.target.value);
    }
  }

  onFormSubmit(e) {
    e.preventDefault();

    this.setState({ input: "" });
  }

  render() {
    return (
      <form className="search-bar-form" onSubmit={this.onFormSubmit.bind(this)}>
        <label className="top-label">React Movie App</label>
        <div className="search-bar-container">
          <input
            placeholder="Search movie title..."
            className="search-bar"
            value={this.state.input}
            onChange={this.onInputChange.bind(this)}
          />
          <i className="fas fa-search" />
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovie }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
