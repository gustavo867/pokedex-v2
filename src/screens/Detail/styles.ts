import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

interface Props {
  color: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${(props: Props) => props.color};
  padding-top: 40px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Column = styled.View`
  flex-direction: column;
`;

export const BackgroundTitle = styled.Text`
  font-family: "SF_Bold";
  font-size: 100px;
  line-height: 100px;
  width: ${width * 4}px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  margin-top: ${height * 0.1}px;
  letter-spacing: 10px;
  left: 0px;
  position: absolute;
`;

export const PokeContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 32px;
`;

export const PokeImg = styled.Image`
  width: 150px;
  height: 150px;
  margin-right: 20px;
`;

export const PokeName = styled.Text`
  color: #fff;
  font-family: "SF_Bold";
  font-size: 32px;
  text-transform: capitalize;
`;

export const PokeId = styled.Text`
  color: rgba(23, 23, 27, 0.9);
  font-family: "SF_Bold";
  font-size: 16px;
`;

export const PokeTypes = styled.FlatList.attrs({
  horizontal: true,
})`
  flex-direction: row;
`;
