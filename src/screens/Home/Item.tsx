import { useNavigation } from "@react-navigation/native";
import React, { memo, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Poke } from "../../../App";
import { fetchCurrentPoke } from "../../redux/actions/PokemonActions";
import Color from "../../shared/backgroundColor";
import BackgroundPokeBall from "../../svgs/backgroundPokebal";
import PaternBackground from "../../svgs/patterBackground";

import Type from "../../components/Type";

import * as S from "./styles";

interface Stat {
  stat: boolean;
  msg: string | null;
}

const Item = (item: Poke) => {
  const { types } = item;

  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  function FormatId(id: number) {
    if (id <= 9) {
      return id.toFixed(2).replace(id.toString(), "").replace(".", "#");
    }
    if (id <= 99) {
      return id.toFixed(1).replace(id.toString(), "").replace(".", "#");
    } else {
      return `#`;
    }
  }

  const id = item.id.toString();

  const imgUrl = useMemo(
    () =>
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    [item.url]
  );

  const typesMemo = useMemo(() => types?.map((item) => item.type.name), [
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
          <S.PokeImg resizeMode="contain" source={{ uri: imgUrl }} />
        </S.PokeButton>
      </S.PokeContainer>
    );
  }

  const handleCurrentPoke = useCallback(async () => {
    const stat: Stat = (await dispatch(fetchCurrentPoke(item.url))) as any;

    if (stat.stat === true) {
      navigate("Detail");
    } else {
      return;
    }
  }, [item.url]);

  return (
    <S.PokeContainer
      color={Color(typesMemo ? typesMemo[0] : types[0].type.name)}
    >
      <S.PokeButton activeOpacity={0.6} onPress={() => handleCurrentPoke()}>
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
        <S.PokeImg resizeMode="contain" source={{ uri: imgUrl }} />
      </S.PokeButton>
    </S.PokeContainer>
  );
};

function PokesAreEqual(prevPoke: Poke, nextPoke: Poke) {
  return prevPoke.name === nextPoke.name && prevPoke.url === nextPoke.url;
}

export default memo(Item, PokesAreEqual);
