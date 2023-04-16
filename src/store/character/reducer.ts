import * as actionTypes from "./actionTypes";
import { CharacterActionTypes } from "./actionTypes";
import { Character } from "../../domain/character";

export type CharacterStateType = {
  characterList: Character[] | [];
  characterListLoading: boolean;
  characterListError: string | null;
};

export type CharacterActionType = CharacterStateType & {
  type: CharacterActionTypes;
};

export const initialState: CharacterStateType = {
  characterList: [],
  characterListLoading: false,
  characterListError: null,
};

const fetchCharacterListStart = (
  state: CharacterStateType
): CharacterStateType => ({
  ...state,
  characterListLoading: true,
});

const fetchCharacterListSuccess = (
  state: CharacterStateType,
  action: CharacterActionType
): CharacterStateType => ({
  ...state,
  characterList: action.characterList,
  characterListLoading: false,
  characterListError: null,
});

const fetchCharacterListFail = (
  state: CharacterStateType,
  action: CharacterActionType
): CharacterStateType => ({
  ...state,
  characterListError: action.characterListError,
  characterListLoading: false,
});

const resetCharacterStore = (): CharacterStateType => ({
  ...initialState,
});

const reducer = (state = initialState, action: CharacterActionType) => {
  switch (action.type) {
    case actionTypes.FETCH_CHARACTER_LIST_START:
      return fetchCharacterListStart(state);
    case actionTypes.FETCH_CHARACTER_LIST_SUCCESS:
      return fetchCharacterListSuccess(state, action);
    case actionTypes.FETCH_CHARACTER_LIST_FAIL:
      return fetchCharacterListFail(state, action);
    case actionTypes.RESET_CHARACTER_STORE:
      return resetCharacterStore();
    default:
      return state;
  }
};

export default reducer;
