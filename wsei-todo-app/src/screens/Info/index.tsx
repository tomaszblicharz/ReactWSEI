import React, { FC } from "react";
import { Button, View } from "react-native";
import styled from "styled-components/native";

import Colors from "../../constans/Colors";

const WelcomeText = styled.Text`
  margin: 60px 20px;
  color: ${Colors.black};
  font-size: 30px;
`;
const CustomImage1 = styled.Image`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 130px;
  height: 130px;
  margin-top: 20px;
  border-radius: 40px;
`;
const CustomImage2 = styled.Image`
  width: 130px;
  height: 130px;
  margin-top: 20px;
  margin-right: auto;
`;
const CustomImage3 = styled.Image`
  width: 130px;
  height: 130px;
  margin-top: 20px;
  margin-left: auto;
`;
const MidText = styled.Text`
  font-size: 23px;
  margin-left: auto;
  margin-right: auto;

  color: ${Colors.black};
`;
const LeftText = styled.Text`
  font-size: 23px;
  color: ${Colors.black};
`;
const RightText = styled.Text`
  font-size: 23px;
  margin-left: auto;
  color: ${Colors.black};
`;

const Body = styled.View`
  background-color: ${Colors.background};
  height: 100%;
`;
interface IInfoProps {}

const Info = ({ navigation }) => {
  return (
    <Body>
      <WelcomeText>About of Coding</WelcomeText>
      <MidText>Jesteśmy na środku</MidText>

      <CustomImage1 source={require("../../assets/call.png")} />
      <LeftText>A teraz do lewa</LeftText>

      <CustomImage2 source={require("../../assets/code.png")} />
      <RightText>No i do prawa</RightText>

      <CustomImage3 source={require("../../assets/break.png")} />
    </Body>
  );
};

export default Info;
