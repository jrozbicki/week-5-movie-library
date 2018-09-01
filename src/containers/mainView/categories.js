import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchData, setCategory } from "../../actions/index.js";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.onClickHandle = this.onClickHandle.bind(this);
  }

  componentDidMount() {
    this.props.fetchData(this.props.selectedCategory);
  }

  onClickHandle(e) {
    const { id } = e.target;
    this.props.fetchData(id).then(() => {
      this.props.setCategory(id);
    });
  }

  render() {
    return (
      <Fragment>
        <ul className="categories">
          <li
            id="popular"
            className={`category-item ${this.props.selectedCategory === "popular" && "selected-category"}`}
            onClick={this.onClickHandle}
          >
            Popular
          </li>
          <li
            id="top_rated"
            className={`category-item ${this.props.selectedCategory === "top_rated" && "selected-category"}`}
            onClick={this.onClickHandle}
          >
            Top Rated
          </li>
          <li
            id="now_playing"
            className={`category-item ${this.props.selectedCategory === "now_playing" && "selected-category"}`}
            onClick={this.onClickHandle}
          >
            Now Playing
          </li>
          <li
            id="upcoming"
            className={`category-item ${this.props.selectedCategory === "upcoming" && "selected-category"}`}
            onClick={this.onClickHandle}
          >
            Up Coming
          </li>
        </ul>
      </Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData, setCategory }, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedCategory: state.selectedCategory
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
