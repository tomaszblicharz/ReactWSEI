import React, { FC } from "react";
import { Text, Button, View } from "react-native";
import styled from "styled-components/native";

import Colors from "../../constans/Colors";

const WelcomeText = styled.Text`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  color: ${Colors.black};
`;
const MidText = styled.Text`
  margin-top: 30px;
  margin-right: auto;
  margin-left: 20px;
  font-size: 20px;
  color: ${Colors.black};
`;
interface ITodoListProps {}

const TodoList = ({ navigation }) => {
  return (
    <View>
      <WelcomeText>TodoList View</WelcomeText>
      <MidText>Add task:</MidText>
      <Button
        title="+"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

export default TodoList;
