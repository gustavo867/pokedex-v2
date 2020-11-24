import axios from "axios";
import { Dispatch } from "redux";
import { State } from "../../../App";

export const fetchPokemons = (page = 150) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${page}&offset=0`
      );

      dispatch({
        type: "SET_POKEMONS",
        data: res.data.results,
      });

      dispatch({
        type: "SET_NEXT_POKEMONS",
        data: res.data.next,
      });

      dispatch({
        type: "SET_PREV_POKEMONS",
        data: res.data.previous,
      });
    } catch (e) {
      return { stat: false, msg: "Error on fetch data" };
    }

    return { stat: true, msg: null };
  };
};

export const fetchPokemonDetail = (url: string) => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get(url);

    try {
      dispatch({
        type: "SET_POKEMON",
        data: res.data,
      });
    } catch (err) {
      console.log(err);
      return { stat: false, msg: err.response.data.message };
    }
  };
};
