import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TextInputProps } from "react-native";

import * as S from "./styles";

interface InputProps extends TextInputProps {}

const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <S.Container>
      <Ionicons name="md-search" size={24} color="#747476" />
      <S.SearchInput {...props} placeholderTextColor="#747476" />
    </S.Container>
  );
};

export default Input;
