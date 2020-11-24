import React, { useCallback, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { fetchPokemons } from "../../redux/actions";
import { Poke } from "../../../App";
import FIlters from "../../components/FIlters";
import Input from "../../components/Input";
import PokeBall from "../../svgs/pokeball";
import Item from "./Item";

import * as S from "./styles";
import { Alert, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const { height } = Dimensions.get("window");

interface Props {
  pokemons: Poke[] | undefined;
  fetchPokemon: (limit: number, offset: number) => any;
}

const Home: React.FC<Props> = ({ pokemons, fetchPokemon }) => {
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [pageNumber, setPageNumber] = useState(20);
  const [offset, setOffset] = useState(0);

  const flatlistRef = useRef<FlatList<unknown> | null>(null);

  function loadData() {
    setPageNumber((state) => state + 20);
    setOffset((state) => state + 20);
    fetchPokemon(20, 0);
  }

  useEffect(() => {
    loadData();
  }, []);

  function PreviousList() {
    setRefreshing(true);

    fetchPokemon(20, 0);
    setPageNumber(20);
    setOffset(0);

    setRefreshing(false);

    return;
  }

  const loadMorePokes = useCallback(async () => {
    setLoadingMore(true);

    console.log(pageNumber);
    console.log(offset);

    if (flatlistRef.current) {
      const value = await fetchPokemon(pageNumber, offset);

      if (value.stat === true) {
        setLoadingMore(false);
        if (!value.data) {
          setPageNumber((state) => state - 20);
          console.log("No data");
        }

        flatlistRef.current.scrollToOffset({ animated: true, offset: 0 });

        setPageNumber((state) => state + 20);
        return;
      } else if (value.msg) {
        Alert.alert(value.msg);
        setLoadingMore(false);
        setPageNumber(20);
        return;
      }
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
        ref={flatlistRef as any}
        data={pokemons}
        keyExtractor={(item: any, index: number) =>
          index.toExponential(6).toString()
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
        removeClippedSubviews={false}
        getItemLayout={(data, index) => ({
          length: height * 0.18,
          offset: height * 0.18 * index,
          index,
        })}
      />
    </S.Container>
  );
};

export default connect(
  (state: any) => ({
    pokemons: state.pokeStore.pokemons,
  }),
  (dispatch: any) => ({
    fetchPokemon: (limit = 20, offset = 0) =>
      dispatch(fetchPokemons(limit, offset)),
  })
)(Home);
