// REACT
import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

// PORBLEMCARD
import ProblemCard from "../components/problem-card.component";

// FILTER MODAL
import FilterModal from "../components/filter-modal.component";

class Problems extends Component {
  constructor(props) {
    super(props);
    this.state = { problems: [], showFilter: false };
  }

  // MODAL STATE
  setOpenFilter = () => this.setState({ showFilter: true });
  setCloseFilter = () => {
    this.fetchProblems();
    this.setState({ showFilter: false });
  };

  // TODO:
  // FETCHING DUMMY PROBLEMS
  // THIS LOGIC WILL BE IN SERVER IN THE FORM OF QUERY PARAMETERS
  fetchProblems = async () => {
    const res = await axios.get("https://shameekagarwal.github.io/fake-data/");
    const filteredProblems = res.data.filter((problem) => {
      let tagsPresent = this.props.problemsFilter.tags.some((tag) => {
        return problem.tags.includes(tag);
      });

      let difficultyPresent = this.props.problemsFilter.difficulties.includes(
        problem.difficulty
      );

      let platformPresent = this.props.problemsFilter.platforms.includes(
        problem.platform
      );

      return tagsPresent && difficultyPresent && platformPresent;
    });
    this.setState({ problems: filteredProblems });
  };

  // FETCHING ALL PROBLEMS INITIALLY
  componentDidMount() {
    this.fetchProblems();
  }

  render() {
    return (
      <>  

        <h3>Problems Page</h3>

        <FilterModal
          show={this.state.showFilter}
          handleClose={this.setCloseFilter}
        />

        <span className="btn btn-dark text-black" onClick={this.setOpenFilter}>
          <i className="fas fa-filter"></i> FILTER
        </span>

        {this.state.problems.map((problem, index) => (
          <ProblemCard problem={problem} key={index} />
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => ({ problemsFilter: state.problemsFilter });

export default connect(mapStateToProps, null)(Problems);
