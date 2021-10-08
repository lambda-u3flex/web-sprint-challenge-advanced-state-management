import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESSFUL = "FETCH_SUCCESSFUL";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_ERROR = "ADD_ERROR";
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const fetchSmurfs = () => (dispatch) => {
  dispatch(fetchStart());
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      dispatch(fetchSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchFail(err));
    });
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (data) => {
  return { type: FETCH_SUCCESSFUL, payload: data };
};

export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};

export const addSmurf = (data) => {
  return { type: ADD_SMURF, payload: data };
};

export const addError = (error) => {
  return { type: ADD_ERROR, payload: error };
};
