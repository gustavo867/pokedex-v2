import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

type Props = {
  color?: string;
}

export const Container = styled.View`
  width: ${width}px;
  margin-top: 20px;
  background-color: #ffffff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-horizontal: 40px;
  padding-top: 40px;
  flex: 1;
`;

export const Description = styled.Text`
  text-align: left;
  font-size: 16px;
  font-family: "SF_Regular";
  color: #747476;
`;

export const Title = styled.Text<Props>`
  margin-top: 20px;
  color: ${(props) => (props.color ? props.color : "#62B957")};
  font-family: "SF_Bold";
  font-size: 16px;
`;
