import { Dispatch } from "redux";
import { State } from "../../../App";
import api from "../../services/api";

export const fetchCurrentPoke = (id: number) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    const poke = getState().pokeStore.pokemons;
    try {
      const data = poke?.filter((poke) => poke.id === id);

      console.log(data);

      if (data) {
        dispatch({
          type: "SET_POKEMON",
          data: data[0],
        });
        return { stat: true, msg: null };
      } else {
        return { stat: false, msg: null };
      }
    } catch (e) {
      return { stat: false, msg: e.message };
    }
  };
};

export const fetchPokemons = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const res = await api.get("/");

      dispatch({
        type: "SET_POKEMONS",
        data: res.data,
      });

      return { stat: true, msg: "Sucess fecthing data", data: res.data };
    } catch (e) {
      return { stat: false, msg: "Error on fetch data" };
    }
  };
};
