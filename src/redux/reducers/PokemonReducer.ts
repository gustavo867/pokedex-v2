import { Reducer } from "redux";

export interface PokemonStateType {
  pokemons: undefined | Array<any>;
  pokemon: undefined | Array<any>;
  pokemonSpecies: undefined | Array<any>;
  pokemonShapes: undefined | Array<any>;
  nextUrl: string;
  prevUrl: string;
  loading: boolean;
  nextPokes: undefined | Array<any>;
}

const initialState: PokemonStateType = {
  pokemons: [],
  nextPokes: undefined,
  pokemon: undefined,
  pokemonSpecies: undefined,
  pokemonShapes: undefined,
  nextUrl: "",
  prevUrl: "",
  loading: false,
};

const PokemonReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POKEMONS":
      return { ...state, pokemons: action.data };
    case "SET_POKEMON":
      return { ...state, pokemon: action.data };
    case "SET_NEXT_LIST_POKEMONS":
      return { ...state, nextPokes: action.data };
    case "SET_NEXT_POKEMONS":
      return { ...state, nextUrl: action.data };
    case "SET_PREV_POKEMONS":
      return { ...state, prevUrl: action.data };
    case "SET_LOADING":
      return { ...state, loading: action.data };
    default:
      return state;
  }
};

export default PokemonReducer;
