import { combineReducers } from "redux";

import PokemonReducer from "./PokemonReducer";

const reducers = {
  pokeStore: PokemonReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
