import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../App";
import { Feather } from "@expo/vector-icons";

import * as S from "./styles";
import Type from "../../components/Type";
import Color from "../../shared/backgroundColor";
import PaternBackgroundRight from "../../svgs/patternBackgroundRight";
import About from "./components/About";
import FormatId from "../../utils";

const Detail: React.FC = () => {
  const currentPoke = useSelector((state: State) => state.pokeStore.pokemon);

  const imgUrl = useMemo(() => currentPoke.image, []);

  const typesMemo = useMemo(() => currentPoke.types.map((item) => item), [
    currentPoke.types,
  ]);

  return (
    <S.Container color={Color(currentPoke.types[0])}>
      <PaternBackgroundRight />
      <S.BackgroundTitle>{currentPoke.name}</S.BackgroundTitle>
      <Feather
        name="arrow-left"
        size={30}
        color="#FFFFFF"
        style={{ marginLeft: 15 }}
      />
      <S.PokeContainer>
        <S.PokeImg source={{ uri: imgUrl }} resizeMode="contain" />
        <S.Column>
          <S.PokeId>
            {FormatId(currentPoke.id)}
            {currentPoke.id}
          </S.PokeId>
          <S.PokeName>{currentPoke.name}</S.PokeName>
          <S.PokeTypes
            data={typesMemo}
            keyExtractor={(item: any) => item.toLowerCase().trim()}
            renderItem={({ item }: any) => <Type item={item} />}
            contentContainerStyle={{
              flexDirection: "row",
            }}
            showsVerticalScrollIndicator={false}
            bounces={false}
          />
        </S.Column>
      </S.PokeContainer>
      <About />
    </S.Container>
  );
};

export default Detail;
