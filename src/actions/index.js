import { SET_RECENT_POSTS } from "./types";

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

export function fetchPostsWithQuery(query) {
  return function (dispatch) {
    axios
      .get(`http://api.dailysmarty.com/search?q=${query}`)
      .then((response) => {
        console.log("query response", response.data.posts);
        // dispatch({
        //   type: SET_RECENT_POSTS,
        //   payload: response.data.posts,
        // });
      });
  };
}
