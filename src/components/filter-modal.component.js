// REACT
import React, { Component } from "react";
import { connect } from "react-redux";

// BOOTSTRAP
import Modal from "react-bootstrap/Modal";

// ACTIONS
import {
  toggleTag,
  togglePlatform,
  toggleDifficulty,
} from "../redux/problems-filter/problems-filter.action";

class FilterModal extends Component {
  renderFilters = (filter, toggleFunction, checkedState, index) => (
    <div className="form-check-inline mx-2" key={index}>
      <input
        className="form-check-input"
        type="checkbox"
        id={filter}
        onChange={() => toggleFunction(filter)}
        defaultChecked={checkedState}
      />
      <label className="form-check-label" htmlFor={filter}>
        {filter}
      </label>
    </div>
  );

  // ACCORIDNG TO THE FIELDS SELECTED IN THE MODAL, A REQUEST WILL BE MADE AND PROBLEMS WILL BE RENDERED

  // SHOW TAGS CHECKBOXES
  renderTags = () =>
    ["dp", "implementation", "greedy", "graphs"].map((tag, index) =>
      this.renderFilters(
        tag,
        this.props.toggleTag,
        this.props.problemsFilter.tags.includes(tag),
        index
      )
    );

  // SHOW PLATFORMS CHECKBOXES
  renderPlatforms = () =>
    [
      "codechef",
      "codeforces",
      "interviewbit",
      "leetcode",
    ].map((platform, index) =>
      this.renderFilters(
        platform,
        this.props.togglePlatform,
        this.props.problemsFilter.platforms.includes(platform),
        index
      )
    );

  // SHOW DIFFICULTY CHECKBOXES
  renderDifficulty = () =>
    ["easy", "medium", "hard"].map((difficulty, index) =>
      this.renderFilters(
        difficulty,
        this.props.toggleDifficulty,
        this.props.problemsFilter.difficulties.includes(difficulty),
        index
      )
    );

  // SHOW MODAL
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>Filter Problems</Modal.Header>
        <Modal.Body>
          {this.renderTags()}
          <hr />
          {this.renderDifficulty()}
          <hr />
          {this.renderPlatforms()}
        </Modal.Body>
        <Modal.Footer>
          <span
            className="btn btn-warning text-black"
            onClick={this.props.handleClose}
          >
            Filter
          </span>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({ problemsFilter: state.problemsFilter });
const mapDispatchToProps = {
  toggleTag,
  togglePlatform,
  toggleDifficulty,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterModal);
