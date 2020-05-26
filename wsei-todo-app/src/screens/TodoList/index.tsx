import React, { FC, useState } from "react";
import { Text, Button, View } from "react-native";
import styled from "styled-components/native";

import Colors from "../../constans/Colors";
import Form from "../../components/Form";

import TodoList from "../../components/TodoList";

const TodoListScreen = ({ navigation }) => {
  const [formView, setFormView] = useState<boolean>(false);
  return (
    <View style={{ backgroundColor: Colors.darkerWhite }}>
      {formView ? (
        <Form switchView={setFormView} />
      ) : (
        <TodoList switchView={setFormView} />
      )}
    </View>
  );
};

export default TodoListScreen;
