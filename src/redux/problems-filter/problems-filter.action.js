import {
  TOGGLE_TAG,
  TOGGLE_PLATFORM,
  TOGGLE_DIFFICULTY,
} from "./problems-filter.types";

// ADD / REMOVE TAGS (DP ETC.)
export const toggleTag = (tag) => ({ type: TOGGLE_TAG, payload: tag });

// ADD / REMOVE PLATFORMS (SPOJ ETC.)
export const togglePlatform = (platform) => ({
  type: TOGGLE_PLATFORM,
  payload: platform,
});

// ADD / REMOVE DIFFICULTIES (EASY, ETC.)
export const toggleDifficulty = (difficulty) => ({
  type: TOGGLE_DIFFICULTY,
  payload: difficulty,
});
