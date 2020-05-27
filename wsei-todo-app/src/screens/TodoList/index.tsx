import React, { FC, useState } from "react";
import { Text, Button, View } from "react-native";
import styled from "styled-components/native";

import Colors from "../../constans/Colors";
import Form from "../../components/Form";
import TodoList from "../../components/TodoList";
import { useNavigation } from "@react-navigation/native";

const Body = styled.View`
  background-color: ${Colors.background};
  height: 100%;
`;

const TodoListScreen = ({ navigation }) => {
  const [formView, setFormView] = useState<boolean>(false);
  return (
    <Body>
      {formView ? (
        <Form switchView={setFormView} />
      ) : (
        <TodoList switchView={setFormView} />
      )}
    </Body>
  );
};

export default TodoListScreen;
