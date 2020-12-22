import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../../../App";
import ColorType from "../../../../shared/colorType";

import * as S from "./styles";

const About: React.FC = () => {
  const poke = useSelector((state: State) => state.pokeStore.pokemon);

  return (
    <S.Container>
      <S.Description>About</S.Description>
      <S.Description>{poke.name}</S.Description>
      <S.Title color={ColorType(poke.types[0])}>Pokédex Data</S.Title>
    </S.Container>
  );
};

export default About;
