import React from "react";
import { SvgXml } from "react-native-svg";

import * as S from "./styles";

import { generationMarkup, sortMarkup, filterMarkup } from "./markups";

const FIlters: React.FC = () => {
  return (
    <S.FiltersContainer>
      <SvgXml
        xml={generationMarkup}
        width={28}
        height={28}
        style={{
          marginHorizontal: 10,
        }}
      />
      <SvgXml
        xml={sortMarkup}
        width={28}
        height={28}
        style={{
          marginHorizontal: 10,
        }}
      />
      <SvgXml
        xml={filterMarkup}
        width={28}
        height={28}
        style={{
          marginHorizontal: 10,
        }}
      />
    </S.FiltersContainer>
  );
};

export default FIlters;
