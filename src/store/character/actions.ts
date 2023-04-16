import * as actionTypes from "./actionTypes";
import { Character } from "../../domain/character";

export const fetchCharacterListStart = () => ({
  type: actionTypes.FETCH_CHARACTER_LIST_START,
});

export const fetchCharacterListSuccess = (characterList: Character[]) => ({
  type: actionTypes.FETCH_CHARACTER_LIST_SUCCESS,
  characterList,
});

export const fetchCharacterListFail = (characterListError: string) => ({
  type: actionTypes.FETCH_CHARACTER_LIST_FAIL,
  characterListError,
});

export const resetCharacterStore = () => ({
  type: actionTypes.RESET_CHARACTER_STORE,
});
