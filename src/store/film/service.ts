import axios from "../../config/Axios/axios-instance";
import { Dispatch } from "redux";
import {
  fetchFilmsListStart,
  fetchFilmsListSuccess,
  fetchFilmsListFail,
} from "./actions";

const API_URL = "/films";

export const fetchFilmList = () => (dispatch: Dispatch) => {
  dispatch(fetchFilmsListStart());
  return axios
    .get(API_URL)
    .then((response) => {
      dispatch(fetchFilmsListSuccess(response.data.results));
    })
    .catch((err) => {
      dispatch(fetchFilmsListFail(err.response.data.error));
    });
};
