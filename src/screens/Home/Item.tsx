import React, { memo, useMemo } from "react";
import { Poke } from "../../../App";
import Color from "../../shared/backgroundColor";
import ColorType from "../../shared/colorType";
import IconType from "../../shared/iconType";
import BackgroundPokeBall from "../../svgs/backgroundPokebal";
import PaternBackground from "../../svgs/patterBackground";

import * as S from "./styles";

const Item = (item: Poke) => {
  const { types } = item;

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

  const Type = ({ item }: { item: string }) => {
    const Icon = IconType(item);

    return (
      <S.TypeLabel color={ColorType(item)}>
        <Icon />
        <S.TypeText> {item}</S.TypeText>
      </S.TypeLabel>
    );
  };

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

  return (
    <S.PokeContainer
      color={Color(typesMemo ? typesMemo[0] : types[0].type.name)}
    >
      <S.PokeButton activeOpacity={0.6}>
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
