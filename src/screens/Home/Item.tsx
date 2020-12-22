import { useNavigation } from "@react-navigation/native";
import React, { memo, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { fetchCurrentPoke } from "../../redux/actions/PokemonActions";
import Color from "../../shared/backgroundColor";
import BackgroundPokeBall from "../../svgs/backgroundPokebal";
import PaternBackground from "../../svgs/patterBackground";
import Pokemon from "../../types/Pokemon";

import Type from "../../components/Type";

import * as S from "./styles";
import FormatId from "../../utils";

interface Stat {
  stat: boolean;
  msg: string | null;
}

const Item = (item: Pokemon) => {
  const { types } = item;

  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const id = item.id.toString();

  const imgUrl = useMemo(() => item.image, []);

  const typesMemo = useMemo(() => types?.map((item) => item), [
    types,
    item.name,
  ]);

  if (types === undefined) {
    return (
      <S.PokeContainer color={Color("default")}>
        <BackgroundPokeBall />
        <PaternBackground />
        <S.LeftContainer>
          <S.PokeId>
            {FormatId(Number(id))}
            {id}
          </S.PokeId>
          <S.PokeName>{item.name}</S.PokeName>
        </S.LeftContainer>
        <S.PokeButton>
          <S.PokeImg source={{ uri: imgUrl }} resizeMode="contain" />
        </S.PokeButton>
      </S.PokeContainer>
    );
  }

  const handleCurrentPoke = useCallback(async () => {
    dispatch(fetchCurrentPoke(item.id));
    navigate("Detail");
  }, [item.id]);

  return (
    <S.PokeContainer color={Color(typesMemo ? typesMemo[0] : types[0])}>
      <S.PokeButton onPress={handleCurrentPoke} activeOpacity={0.8}>
        <S.V pointerEvents="none">
          <BackgroundPokeBall />
          <PaternBackground />
          <S.LeftContainer>
            <S.PokeId>
              {FormatId(Number(id))}
              {id}
            </S.PokeId>
            <S.PokeName>{item.name}</S.PokeName>
            <S.TypesContainer>
              <S.Types
                data={typesMemo}
                keyExtractor={(item: any) => item.toLowerCase().trim()}
                renderItem={({ item }: any) => <Type item={item} />}
                contentContainerStyle={{
                  flexDirection: "row",
                }}
                showsVerticalScrollIndicator={false}
                bounces={false}
              />
            </S.TypesContainer>
          </S.LeftContainer>
          <S.PokeImg source={{ uri: imgUrl }} resizeMode="contain" />
        </S.V>
      </S.PokeButton>
    </S.PokeContainer>
  );
};

function PokesAreEqual(prevPoke: Pokemon, nextPoke: Pokemon) {
  return prevPoke.name === nextPoke.name && prevPoke.id === nextPoke.id;
}

export default memo(Item, PokesAreEqual);
