import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State, Types } from "../../../App";

import * as S from "./styles";

interface Item {
  id: number;
  color: string;
  types: Types[];
}

const Item = (item: { name: string; url: string }) => {
  const [currentColor, setColor] = useState("");

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

  const GRASS_COLOR = "#62B957";
  const FIRE_COLOR = "#FD7D24";
  const WATER_COLOR = "#4A90DA";
  const LIGHTNING_COLOR = "#EED535";
  const BROWN_COLOR = "#8B4513";
  const GRAY_COLOR = "#d1d1e0";
  const PINK_COLOR = "#f4bdc9";
  const PURPLE_COLOR = "#A552CC";
  const WHITE_COLOR = "#FFFFFF";
  const BLACK_COLOR = "#58575F";
  const ICE_COLOR = "#61CEC0";

  const GREEN_COLOR = "#8BBE8A";
  const RED_COLOR = "#FFA756";
  const BLUE_COLOR = "#58ABF6";
  const NORMAL_COLOR = "#B5B9C4";
  const POISON_COLOR = "#9F6E97";
  const FAIRY_COLOR = "#EBA8C3";
  const ELETRIC_COLOR = "#F2CB55";
  const BUG_COLOR = "#8BD674";

  const color = (color: string) => {
    if (color === "green") return GREEN_COLOR;
    if (color === "red") return RED_COLOR;
    if (color === "blue") return BLUE_COLOR;
    if (color === "black") return NORMAL_COLOR;
    if (color === "brown") return BROWN_COLOR;
    if (color === "gray") return GRAY_COLOR;
    if (color === "pink") return FAIRY_COLOR;
    if (color === "yellow") return ELETRIC_COLOR;
    if (color === "purple") return POISON_COLOR;
    if (color === "white") return BUG_COLOR;
    return NORMAL_COLOR;
  };

  const colorType = (color: string) => {
    if (color === "grass") return GRASS_COLOR;
    if (color === "fire") return FIRE_COLOR;
    if (color === "water") return WATER_COLOR;
    if (color === "dark") return BLACK_COLOR;
    if (color === "rock") return BROWN_COLOR;
    if (color === "gray") return GRAY_COLOR;
    if (color === "fairy") return PINK_COLOR;
    if (color === "eletric") return LIGHTNING_COLOR;
    if (color === "poison") return PURPLE_COLOR;
    if (color === "ice") return ICE_COLOR;
    return BLACK_COLOR;
  };

  const pokeDetails = useSelector((state: State) => state.pokeStore.pokemon);

  const url = item.url;

  const pokeId = url
    .replace("https://pokeapi.co/api/v2/pokemon-species/", "")
    .replace("/", "");

  const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`;

  const Type = (item: Item) => {
    setColor(item.color);

    return (
      <S.TypesContainer>
        {item.types.map((item) => (
          <S.TypeLabel color={colorType(item.type.name)}>
            <S.TypeText> {item.type.name}</S.TypeText>
          </S.TypeLabel>
        ))}
      </S.TypesContainer>
    );
  };

  if (pokeDetails === undefined) {
    return <S.PokeName>Loading ...</S.PokeName>;
  }

  return (
    <S.PokeContainer color={color(currentColor)}>
      <S.LeftContainer>
        <S.PokeId>
          {FormatId(Number(pokeId))}
          {pokeId}
        </S.PokeId>
        <S.PokeName>{item.name}</S.PokeName>
        <S.Types
          data={pokeDetails.filter((poke) => {
            return poke.id.toString() === pokeId;
          })}
          keyExtractor={(item: any) => item.id.toExponential(2).toString()}
          renderItem={({ item }: any) => <Type {...item} />}
          contentContainerStyle={{
            flexDirection: "row",
          }}
          showsVerticalScrollIndicator={false}
          bounces={false}
        />
      </S.LeftContainer>
      <S.PokeImg resizeMode="contain" source={{ uri: imgUrl }} />
    </S.PokeContainer>
  );
};

export default Item;
