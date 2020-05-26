import React, { FC, useState } from "react";
import { Text, Button } from "react-native";
import styled from "styled-components/native";
import { useSelector } from "react-redux";

import { IState } from "../reducers";
import { ITodoListReducer } from "../reducers/todoListReducer";
import { ISingleElList } from "../entities/todoSingleEl";

const Wrapper = styled.View`
  margin: 80px 20px 0 20px;
`;

const SingleElList = styled.View`
  border: 1px solid black;
  margin: 0 0 20px 0;
`;

const TodoList: FC<{ switchView(formView: boolean) }> = (props) => {
  const todoListState = useSelector<IState, ITodoListReducer>(
    (state) => state.TodoList
  );
  const goToForm = () => {
    props.switchView(true);
  };
  return (
    <Wrapper>
      {todoListState.TodoList.map((elem: ISingleElList, index: number) => (
        <SingleElList key={index}>
          <Text>{elem.name} </Text>
          <Text>{elem.description} </Text>
        </SingleElList>
      ))}
      <Button title="Dodaj nowy" onPress={goToForm} />
    </Wrapper>
  );
};
export default TodoList;
