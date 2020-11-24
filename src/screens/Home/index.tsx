import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPokemons } from "../../redux/actions";
import { Poke } from "../../../App";
import FIlters from "../../components/FIlters";
import Input from "../../components/Input";
import PokeBall from "../../svgs/pokeball";
import Item from "./Item";

import * as S from "./styles";
import { Alert, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

interface Props {
  pokemons: Poke[] | undefined;
  fetchPokemon: (
    page: number
  ) => Promise<{
    msg: null | string;
    stat: boolean;
  }>;
}

const Home: React.FC<Props> = ({ pokemons, fetchPokemon }) => {
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  function loadData() {
    fetchPokemon(150);
  }

  useEffect(() => {
    loadData();
  }, []);

  function PreviousList() {
    setRefreshing(true);

    fetchPokemon(150);

    setRefreshing(false);

    return;
  }

  const loadMorePokes = useCallback(async () => {
    setLoadingMore(true);

    const value = await fetchPokemon(1000);

    if (value.stat === true) {
      setLoadingMore(false);
    } else if (value.msg) {
      Alert.alert(value.msg);
    }
  }, []);

  const renderLoading = () => {
    return loadingMore ? (
      <S.Loading size="large" color="#00ff00" />
    ) : (
      <S.LoadButton onPress={loadMorePokes}>
        <S.LoadText>Load more pokemons</S.LoadText>
      </S.LoadButton>
    );
  };

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
        data={pokemons?.filter((item) => {
          return item.name.includes(search) || item;
        })}
        keyExtractor={(item: any, index: number) =>
          index.toExponential(7).toString().toLowerCase()
        }
        renderItem={({ item }: any) => <Item {...item} />}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        onRefresh={() => PreviousList()}
        refreshing={refreshing}
        showsVerticalScrollIndicator={false}
        bounces={false}
        initialNumToRender={5}
        maxToRenderPerBatch={25}
        ListFooterComponent={renderLoading}
        removeClippedSubviews={true}
        getItemLayout={(data, index) => ({
          length: height * 0.18,
          offset: height * 0.18 * index,
          index,
        })}
        decelerationRate="fast"
      />
    </S.Container>
  );
};

export default connect(
  (state: any) => ({
    pokemons: state.pokeStore.pokemons,
  }),
  (dispatch: any) => ({
    fetchPokemon: (page: number = 15) => dispatch(fetchPokemons(page)),
  })
)(Home);
