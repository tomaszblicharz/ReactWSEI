import React, { FC } from "react";
import { Button, View, Image, Text, ScrollView } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../constans/Colors";

const WelcomeText = styled.Text`
  margin: 80px 20px;
  font-size: 30px;
  color: ${Colors.black};
`;
const Textarea = styled.Text`
  margin: 10px 20px;
  font-size: 20px;
  color: ${Colors.black};
`;

const CustomImage = styled.Image`
  width: 160px;
  height: 160px;
  margin-top: 30px;
`;

interface IHomeProps {}

const Home: FC<IHomeProps> = (props) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: Colors.lightBlue,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <ScrollView>
        <CustomImage
          style={{
            borderBottomRightRadius: 20,
          }}
          source={require("../../assets/logo.png")}
        />
        <WelcomeText>Welcome in codelife!!!</WelcomeText>
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
    </View>
  );
};

export default Home;
