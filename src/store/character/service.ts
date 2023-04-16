import axios from "../../config/Axios/axios-instance";
import { Dispatch } from "redux";
import {
  fetchCharacterListStart,
  fetchCharacterListSuccess,
  fetchCharacterListFail,
} from "./actions";

const API_URL = "/people";

export const fetchCharacterList =
  (characterIds: number[]) => (dispatch: Dispatch) => {
    dispatch(fetchCharacterListStart());
    const promises = characterIds.map((id) => axios.get(`${API_URL}/${id}`));
    return Promise.all(promises)
      .then((responses) => {
        const characterList = responses.map((response) => response.data);
        dispatch(fetchCharacterListSuccess(characterList));
      })
      .catch((err) => {
        dispatch(fetchCharacterListFail(err.response.data.error));
      });
  };
