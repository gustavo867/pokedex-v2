import { Reducer } from "redux";

export interface PokemonStateType {
  pokemons: undefined | Array<any>;
  pokemon: undefined | any;
  loading: boolean;
}

const initialState: PokemonStateType = {
  pokemons: [],
  pokemon: undefined,
  loading: false,
};

const PokemonReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POKEMONS":
      return {
        ...state,
        pokemons: action.data,
      };
    case "SET_POKEMON":
      return { ...state, pokemon: action.data };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default PokemonReducer;
