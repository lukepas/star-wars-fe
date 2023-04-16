export const FETCH_FILM_LIST_START = "FETCH_FILM_LIST_START";
export const FETCH_FILM_LIST_SUCCESS = "FETCH_FILM_LIST_SUCCESS";
export const FETCH_FILM_LIST_FAIL = "FETCH_FILM_LIST_FAIL";

export type FilmActionTypes =
  | typeof FETCH_FILM_LIST_START
  | typeof FETCH_FILM_LIST_SUCCESS
  | typeof FETCH_FILM_LIST_FAIL;
