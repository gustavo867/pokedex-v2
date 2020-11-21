import React from "react";
import { Poke, Types } from "../../../App";
import Color from "../../shared/backgroundColor";
import ColorType from "../../shared/colorType";
import IconType from "../../shared/iconType";
import BackgroundPokeBall from "../../svgs/backgroundPokebal";
import PaternBackground from "../../svgs/patterBackground";

import * as S from "./styles";

const Item = (item: Poke) => {
  function FormatId(id: number) {
    if (id <= 9) {
      return id.toFixed(2).replace(id.toString(), "").replace(".", "#");
    }
    if (id <= 99) {
      return id.toFixed(1).replace(id.toString(), "").replace(".", "#");
    } else {
      return;
    }
  }

  const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${item.id}.png`;

  const Type = (item: Types) => {
    const Icon = IconType(item.type.name);

    return (
      <S.TypeLabel color={ColorType(item.type.name)}>
        <Icon />
        <S.TypeText> {item.type.name}</S.TypeText>
      </S.TypeLabel>
    );
  };

  return (
    <S.PokeContainer color={Color(item.types[0].type.name)}>
      <BackgroundPokeBall />
      <PaternBackground />
      <S.LeftContainer>
        <S.PokeId>
          {FormatId(item.id)}
          {item.id}
        </S.PokeId>
        <S.PokeName>{item.name}</S.PokeName>
        <S.TypesContainer>
          <S.Types
            data={item.types}
            keyExtractor={(item: any) => item.slot.toString()}
            renderItem={({ item }: any) => <Type {...item} />}
            contentContainerStyle={{
              flexDirection: "row",
            }}
            showsVerticalScrollIndicator={false}
            bounces={false}
          />
        </S.TypesContainer>
      </S.LeftContainer>
      <S.PokeImg resizeMode="contain" source={{ uri: imgUrl }} />
    </S.PokeContainer>
  );
};

export default Item;
