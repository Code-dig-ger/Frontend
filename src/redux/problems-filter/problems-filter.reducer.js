import {
  TOGGLE_TAG,
  TOGGLE_PLATFORM,
  TOGGLE_DIFFICULTY,
} from "./problems-filter.types";

// INITIALLY ALL TYPES OF PROBLEMS ARE DISPLAYED
const INITIAL_STATE = {
  tags: ["dp", "implementation", "greedy", "graphs"],
  platforms: ["codechef", "codeforces", "interviewbit", "leetcode"],
  difficulties: ["easy", "medium", "hard"],
};

// IF ANYTHING IS CLICKED
// IF IT WAS PRESENT EARLIER, REMOVE IT FROM THE LIST
// ELSE ADD IT TO THE LIST
const toggleItemFromArray = (array, toggleItem) => {
  if (array.includes(toggleItem)) {
    return array.filter((item) => item !== toggleItem);
  }
  return [...array, toggleItem];
};

// ADDING OR REMOVING FILTERS FOR PROBLEMS
const problemsFilterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_TAG:
      return {
        ...state,
        tags: toggleItemFromArray(state.tags, action.payload),
      };

    case TOGGLE_PLATFORM:
      return {
        ...state,
        platforms: toggleItemFromArray(state.platforms, action.payload),
      };

    case TOGGLE_DIFFICULTY:
      return {
        ...state,
        difficulties: toggleItemFromArray(state.difficulties, action.payload),
      };

    default:
      return state;
  }
};

export default problemsFilterReducer;
