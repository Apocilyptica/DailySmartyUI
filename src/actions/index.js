import { SET_RECENT_POSTS, SET_RESULTS_POSTS } from "./types";

import axios from "axios";
import actions from "redux-form/lib/actions";

export function fetchRecentPosts() {
  return function (dispatch) {
    axios.get("http://api.dailysmarty.com/posts").then((response) => {
      dispatch({
        type: SET_RECENT_POSTS,
        payload: response.data.posts,
      });
    });
  };
}

export function fetchPostsWithQuery(query, callback) {
  return function (dispatch) {
    axios
      .get(`https://api.dailysmarty.com/search?q=${query.query}`)
      .then((response) => {
        dispatch({
          type: SET_RESULTS_POSTS,
          payload: response.data.posts,
        });
        if (callback) {
          callback();
        }
      });
  };
}
