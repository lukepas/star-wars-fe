import React from "react";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
  Store,
} from "redux";
import thunk from "redux-thunk";
import filmReducer, { FilmStateType } from "../../store/film/reducer";
import characterRecuder, {
  CharacterStateType,
} from "../../store/character/reducer";

export type StoreState = {
  film: FilmStateType;
  character: CharacterStateType;
};

type Props = {
  children?: any;
};

const rootReducer = combineReducers<StoreState>({
  film: filmReducer,
  character: characterRecuder,
});

export const store: Store<any, any> = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const StoreProvider = ({ children }: Props) => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
