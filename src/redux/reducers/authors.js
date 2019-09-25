import { FETCH_AUTHORS } from "./actionType";

case FETCH_AUTHORS:
    const authors = action.payload
    return {
      ...state,
      authors: authors
    }