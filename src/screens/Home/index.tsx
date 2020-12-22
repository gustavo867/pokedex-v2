import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPokemons } from "../../redux/actions";
import FIlters from "../../components/FIlters";
import Input from "../../components/Input";
import PokeBall from "../../svgs/pokeball";
import Pokemon from "../../types/Pokemon";
import Item from "./Item";

import * as S from "./styles";

interface Props {
  pokemons: Pokemon[] | undefined;
  fetchPokemon: () => any;
}

const Home: React.FC<Props> = ({ pokemons, fetchPokemon }) => {
  const [search, setSearch] = useState("");

  function loadData() {
    fetchPokemon();
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
        <Input
          placeholder="What pokémon are you looking for?"
          value={search}
          onChangeText={(text) => setSearch(text)}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </S.SearchContainer>
      <S.Pokemons
        data={pokemons}
        keyExtractor={(_, index: number) => index.toExponential(6).toString()}
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

export default connect(
  (state: any) => ({
    pokemons: state.pokeStore.pokemons,
  }),
  (dispatch: any) => ({
    fetchPokemon: () => dispatch(fetchPokemons()),
  })
)(Home);
