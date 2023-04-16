import * as actionTypes from "./actionTypes";
import { FilmActionTypes } from "./actionTypes";
import { Film } from "../../domain/film";

export type FilmStateType = {
  filmsList: Film[] | [];
  filmsListLoading: boolean;
  filmsListError: string | null;
};

export type FilmActionType = FilmStateType & {
  type: FilmActionTypes;
};

export const initialState: FilmStateType = {
  filmsList: [],
  filmsListLoading: false,
  filmsListError: null,
};

const fetchFilmsListStart = (state: FilmStateType): FilmStateType => ({
  ...state,
  filmsListLoading: true,
});

const fetchFilmsListSuccess = (
  state: FilmStateType,
  action: FilmActionType
): FilmStateType => ({
  ...state,
  filmsList: action.filmsList,
  filmsListLoading: false,
  filmsListError: null,
});

const fetchFilmsListFail = (
  state: FilmStateType,
  action: FilmActionType
): FilmStateType => ({
  ...state,
  filmsListError: action.filmsListError,
  filmsListLoading: false,
});

const reducer = (state = initialState, action: FilmActionType) => {
  switch (action.type) {
    case actionTypes.FETCH_FILM_LIST_START:
      return fetchFilmsListStart(state);
    case actionTypes.FETCH_FILM_LIST_SUCCESS:
      return fetchFilmsListSuccess(state, action);
    case actionTypes.FETCH_FILM_LIST_FAIL:
      return fetchFilmsListFail(state, action);
    default:
      return state;
  }
};

export default reducer;
