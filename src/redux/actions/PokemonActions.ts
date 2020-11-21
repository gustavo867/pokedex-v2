import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { State, Types } from "../../../App";

interface PokemonDetail {
  data: {
    color: {
      name: string;
      url: string;
    };
  };
}

interface ColorsArray {
  id: number;
  color: string;
  types: Types[];
}

export const fetchPokemons = (
  url = "https://pokeapi.co/api/v2/pokemon-species"
) => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get(url);

    try {
      const colorsArray: ColorsArray[] = [];

      res.data.results.map(async (item: { name: string; url: string }) => {
        const detailRes = await axios.get(item.url);
        const types = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${detailRes.data.id}`
        );

        const data = {
          id: detailRes.data.id,
          color: detailRes.data.color.name,
          types: types.data.types,
          name: item.name,
          url: item.url,
        };

        if (detailRes.data.id === 20) {
          colorsArray.push(data);
          dispatch({
            type: "SET_POKEMONS",
            data: colorsArray,
          });
        } else {
          if (colorsArray.includes(data)) {
            return;
          }
          colorsArray.push(data);
        }
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
      return { stat: false, msg: e.response.data.message };
    }

    return { state: true, msg: null };
  };
};

export const fetchPokemonDetail = (url: string) => {
  return (dispatch: Dispatch) => {
    axios
      .get(url)
      .then((resp: PokemonDetail) => {
        dispatch({
          type: "SET_POKEMON",
          data: resp.data.color,
        });

        return { stat: true, msg: resp.data };
      })
      .catch((err) => {
        console.log(err);
        return { stat: false, msg: err.response.data.message };
      });
  };
};
