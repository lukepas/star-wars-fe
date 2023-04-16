import * as actionTypes from "./actionTypes";
import { Film } from "../../domain/film";

export const fetchFilmsListStart = () => ({
  type: actionTypes.FETCH_FILM_LIST_START,
});

export const fetchFilmsListSuccess = (filmsList: Film[]) => ({
  type: actionTypes.FETCH_FILM_LIST_SUCCESS,
  filmsList,
});

export const fetchFilmsListFail = (filmsListError: string) => ({
  type: actionTypes.FETCH_FILM_LIST_FAIL,
  filmsListError,
});
