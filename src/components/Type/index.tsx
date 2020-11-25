import React from "react";
import ColorType from "../../shared/colorType";
import IconType from "../../shared/iconType";

import * as S from "./styles";

interface Props {
  item: string;
}

const Type: React.FC<Props> = ({ item }) => {
  const Icon = IconType(item);

  return (
    <S.TypeLabel color={ColorType(item)}>
      <Icon />
      <S.TypeText> {item}</S.TypeText>
    </S.TypeLabel>
  );
};

export default Type;
