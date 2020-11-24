import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  width: ${width * 0.8}px;
  height: ${height * 0.08}px;
  border-radius: 12px;
  background-color: #f2f2f2;
  padding-horizontal: 25px;
  align-items: center;
  flex-direction: row;
  margin-top: 25px;
`;

export const SearchInput = styled.TextInput`
  margin-left: 12px;
  color: #747476;
`;
