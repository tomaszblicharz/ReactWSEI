import React, { FC, useState } from "react";
import { Text, Button } from "react-native";
import styled from "styled-components/native";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "./../constans/Colors";
import { IState } from "../reducers";
import { ITodoListReducer } from "../reducers/todoListReducer";
import { ISingleElList } from "../entities/todoSingleEl";

const Wrapper = styled.View`
  margin: 80px 20px 0 20px;
  color: black;
`;

const SingleElList = styled.View`
  margin: 0 0 20px 0;
  min-height: 60px;
`;
const WelcomeText = styled.Text`
  font-size: 40px;
  background-color: #0066cc;
  text-align: center;
  bottom: 50px;
  color: ${Colors.black};
  border-radius: 20px;
`;
const CustomTitle = styled.Text`
  border: 1px solid;
  color: black;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  font-size: 25px;
  height: 40px;
  background-color: #ff9900;
`;
const CustomDescription = styled.TextInput`
  border: 1px solid;
  padding: 10px;
  color: black;
  width: 100%;
  border-radius: 10px;
  min-height: 80px;
  background-color: #ffcc66;
  font-size: 15px;
`;
const TodoList: FC<{ switchView(formView: boolean) }> = (props) => {
  const todoListState = useSelector<IState, ITodoListReducer>(
    (state) => state.todoList
  );
  const goToForm = () => {
    props.switchView(true);
  };

  return (
    <Wrapper>
      <WelcomeText>TASKS</WelcomeText>
      {todoListState.todoList.map((elem: ISingleElList, index: number) => (
        <SingleElList key={index}>
          <CustomTitle>{elem.title} </CustomTitle>
          <CustomDescription>{elem.description} </CustomDescription>
        </SingleElList>
      ))}
      <Button title="ADD TASK" onPress={goToForm} />
    </Wrapper>
  );
};
export default TodoList;
