import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../../App";
import FIlters from "../../components/FIlters";
import { fetchPokemonDetail, fetchPokemons } from "../../redux/actions";
import PokeBall from "../../svgs/pokeball";
import Item from "./Item";

import * as S from "./styles";

const { width, height } = Dimensions.get("window");

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>();

  const pokemons = useSelector((state: State) => state.pokeStore.pokemons);
  const dispatch = useDispatch();

  async function loadData() {
    dispatch(fetchPokemons());
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <S.Container>
      <PokeBall />
      <FIlters />
      <S.SearchContainer>
        <S.Title>Pokédex</S.Title>
        <S.Description>
          Search for Pokémon by name or using the National Pokédex number.
        </S.Description>
      </S.SearchContainer>
      <S.Pokemons
        data={pokemons}
        keyExtractor={(item: any, index: number) => index.toString()}
        renderItem={({ item }: any) => <Item {...item} />}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      />
    </S.Container>
  );
};

export default Home;
