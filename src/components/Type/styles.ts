import styled from "styled-components/native";

interface Props {
  color: string;
}

export const TypeLabel = styled.View`
  align-items: center;
  justify-content: center;
  padding-horizontal: 5px;
  height: 25px;
  border-radius: 3px;
  background-color: ${(props: Props) => props.color};
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
