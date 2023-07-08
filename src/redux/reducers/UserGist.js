import { ADD_BOOKINGNO, GET_ALL_PUBLIC_GIST } from "../types";

const initialState = {
    allGist: [],
  };

  export const gistReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_PUBLIC_GIST:
        return {
          ...state,
          allGist: action.payload,
        };
  
      default:
        return state;
    }
  };
  export default gistReducer