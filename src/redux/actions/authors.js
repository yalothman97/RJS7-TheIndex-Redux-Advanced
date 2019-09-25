import axios from "axios";
import { FETCH_AUTHORS } from "./actionType";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const fetchAllAuthors = () => {
  return async dispatch => {
    const res = await instance.get("/api/authors/");
    dispatch({
      type: FETCH_AUTHORS,
      payload: res
    });
  };
};
