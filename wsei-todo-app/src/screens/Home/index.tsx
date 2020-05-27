import React, { FC } from "react";
import { Button, View, Image, Text, ScrollView } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../constans/Colors";

const WelcomeText = styled.Text`
  font-size: 35px;
  flex: 1;
  margin-top: auto;
  margin-bottom: auto;
  color: ${Colors.black};
  text-align: center;
`;
const Textarea = styled.Text`
  margin: 10px 20px;
  font-size: 20px;
  color: ${Colors.black};
`;
const CustomImage = styled.Image`
  width: 160px;
  height: 160px;

  border-radius: 100px;
  margin-top: 40px;
`;
const Header = styled.View`
  height: 250px;
  padding: 10px;
  margin-bottom: 30px;
  flex-direction: row;
`;
const Body = styled.View`
  background-color: ${Colors.background};
`;

interface IHomeProps {}

const Home: FC<IHomeProps> = (props) => {
  const navigation = useNavigation();

  return (
    <Body>
      <ScrollView>
        <Header>
          <CustomImage source={require("../../assets/logo.png")} />
          <WelcomeText>Welcome in codelife!!!</WelcomeText>
        </Header>
        <Textarea>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod sed quo
          qui adipisci commodi odio ut deserunt deleniti dolore unde nostrum
          optio architecto, esse rem, ex dolores illo cumque assumenda? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          sapiente sunt tempora dolore modi, odit obcaecati voluptas libero
          distinctio enim eligendi voluptates magnam quod error aliquam quo
          fugiat assumenda exercitationem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Inventore nisi illo saepe laudantium
          voluptas officia minima quae! Sit, ut mollitia? Dignissimos provident
          non blanditiis commodi illum delectus, architecto tempora. Ipsa. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nam architecto,
          maiores, non tenetur aliquam distinctio laborum adipisci deleniti
          veritatis, fuga fugiat illo iusto accusantium! Vero libero numquam
          vitae voluptates veritatis.
        </Textarea>
      </ScrollView>
    </Body>
  );
};

export default Home;
