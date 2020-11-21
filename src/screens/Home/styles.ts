import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

interface Props {
  color: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding-top: 20px;
`;

export const FiltersContainer = styled.View`
  margin-top: 42px;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const SearchContainer = styled.View`
  padding-horizontal: 40px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-family: "SF_Bold";
  font-size: 32px;
  color: #17171b;
  text-align: left;
`;

export const Description = styled.Text`
  font-family: "SF_Regular";
  font-size: 16px;
  color: #747476;
  text-align: left;
`;

export const Pokemons = styled.FlatList`
  flex-grow: 1;
`;

export const PokeContainer = styled.View`
  width: ${width * 0.8}px;
  height: ${height * 0.17}px;
  border-radius: 8px;
  background-color: #8bbe8a;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-horizontal: 10px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props: Props) => props.color};
  align-items: center;
`;

export const LeftContainer = styled.View`
  flex-direction: column;
`;

export const PokeName = styled.Text`
  color: #ffffff;
  font-family: "SF_Regular";
  font-size: 26px;
  margin-left: 10px;
  text-transform: capitalize;
`;

export const PokeId = styled.Text`
  color: rgba(23, 23, 27, 0.6);
  font-family: "SF_Bold";
  font-size: 12px;
  margin-left: 10px;
`;

export const PokeImg = styled.Image`
  width: 45%;
  height: 90%;
`;

export const Types = styled.FlatList`
  flex-grow: 0;
`;

export const TypesContainer = styled.View`
  flex-direction: row;
  margin-top: 5px;
  margin-left: 5px;
`;

export const TypeLabel = styled.View`
  align-items: center;
  justify-content: center;
  width: 61px;
  height: 25px;
  border-radius: 3px;
  background-color: ${(props: Props) => props.color};
  margin-horizontal: 5px;
`;

export const TypeText = styled.Text`
  color: #ffffff;
  font-size: 12px;
  font-family: "SF_Regular";
  text-transform: capitalize;
  text-align: center;
`;
