import React, { FC, useState } from "react";
import { Text, Button } from "react-native";
import styled from "styled-components/native";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "./../constans/Colors";
import { IState } from "../reducers";
import { ITodoListReducer } from "../reducers/todoListReducer";
import { ISingleElList } from "../entities/todoSingleEl";
import { removeElTodoList } from "../actions/todoListActions";

const Wrapper = styled.View`
  margin: 80px 20px 0 20px;
  color: black;
  min-height: 670px;
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
  background-color: ${Colors.taskTitle};
`;
const CustomDescription = styled.TextInput`
  border: 1px solid;
  padding: 10px;
  color: black;
  width: 100%;
  border-radius: 10px;
  min-height: 80px;
  background-color: ${Colors.taskDiscr};
  font-size: 15px;
`;
type removeElTodoList = ReturnType<typeof removeElTodoList>;
const TodoList: FC<{ switchView(formView: boolean) }> = (props) => {
  const dispatch = useDispatch();
  const todoListState = useSelector<IState, ITodoListReducer>(
    (state) => state.todoList
  );
  const goToForm = () => {
    props.switchView(true);
  };
  const removeTask = (id: number) => {
    dispatch<removeElTodoList>(removeElTodoList(id));
  };

  return (
    <Wrapper>
      <WelcomeText>TASKS</WelcomeText>
      {todoListState.todoList.map((elem: ISingleElList, index: number) => (
        <SingleElList key={index}>
          <CustomTitle>{elem.title} </CustomTitle>
          <CustomDescription>{elem.description} </CustomDescription>
          <Button title="REMOVE" onPress={() => removeTask(elem.id)} />
        </SingleElList>
      ))}
      <Button title="ADD TASK" onPress={goToForm} />
    </Wrapper>
  );
};
export default TodoList;
