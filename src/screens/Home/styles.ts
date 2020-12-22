import { Dimensions, Pressable } from "react-native";
import CachedImage from "react-native-expo-cached-image";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

type Props = {
  color: string;
};

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding-top: 20px;
`;

export const SearchContainer = styled.View`
  padding-horizontal: 40px;
  margin-top: 10px;
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
  margin-top: 10px;
`;

export const PokeContainer = styled.View`
  width: ${width * 0.8}px;
  height: ${height * 0.18}px;
  border-radius: 8px;
  background-color: #8bbe8a;
  margin-top: 10px;
  margin-bottom: 10px;
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
  font-size: 23px;
  margin-left: 10px;
  text-transform: capitalize;
`;

export const PokeId = styled.Text`
  color: rgba(23, 23, 27, 0.6);
  font-family: "SF_Bold";
  font-size: 12px;
  margin-left: 10px;
`;

export const V = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${width * 0.78}px;
  height: ${height * 0.18}px;
  align-items: center;
`;

export const PokeButton = styled.TouchableOpacity`
  width: ${width * 0.78}px;
  align-items: center;
  height: ${height * 0.18}px;
`;

export const PokeImg = styled(CachedImage)`
  width: 45%;
  height: 90%;
  position: absolute;
  right: 10px;
  z-index: 1;
`;

export const Types = styled.FlatList`
  flex-grow: 0;
  flex-direction: row;
`;

export const TypesContainer = styled.View`
  flex-direction: row;
  margin-top: 5px;
  margin-left: 5px;
`;

export const TypeLabel = styled.View<Props>`
  align-items: center;
  justify-content: center;
  padding-horizontal: 5px;
  height: 25px;
  border-radius: 3px;
  background-color: ${(props) => props.color};
  margin-horizontal: 5px;
  flex-direction: row;
`;

export const TypeText = styled.Text`
  color: #ffffff;
  font-size: 12px;
  font-family: "SF_Regular";
  text-transform: capitalize;
  text-align: center;
  margin-left: 5px;
  margin-right: 2px;
`;

export const Loading = styled.ActivityIndicator.attrs({})`
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const LoadButton = styled.TouchableOpacity`
  height: 100px;
  border-radius: 20px;
  margin-bottom: 20px;
  border-color: #000;
  border-width: 2px;
  align-items: center;
  justify-content: center;
  width: ${width * 0.8}px;
  border-style: dashed;
`;

export const LoadText = styled.Text`
  font-size: 18px;
  color: grey;
  font-family: "SF_Bold";
`;
