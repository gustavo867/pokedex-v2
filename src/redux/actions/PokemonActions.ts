import axios from "axios";
import { Dispatch } from "redux";
import { State } from "../../../App";

interface Item {
  name: string;
  url: string;
}

const WithPromise = (item: any) => {
  return Promise.resolve(item);
};

export const fetchPokemonDetail = (url: string) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    try {
      const res = await axios.get(url);

      const data = {
        id: res.data.id,
        name: res.data.name,
        types: res.data.types,
        url: url,
      };

      return data;
    } catch (err) {
      console.log(err);
      return { stat: false, msg: err.response.data.message };
    }
  };
};

export const fetchPokemons = (limit: number, offset = 0) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );

      const getData = async () => {
        return Promise.all(
          res.data.results.map((item: Item) => {
            const res = dispatch(fetchPokemonDetail(item.url) as any);
            return res;
          })
        );
      };

      const data = await getData();

      dispatch({
        type: "SET_POKEMONS",
        data: data,
      });

      dispatch({
        type: "SET_NEXT_POKEMONS",
        data: res.data.next,
      });

      dispatch({
        type: "SET_PREV_POKEMONS",
        data: res.data.previous,
      });

      return { stat: true, msg: "Sucess fecthing data", data: data };
    } catch (e) {
      return { stat: false, msg: "Error on fetch data" };
    }
  };
};
