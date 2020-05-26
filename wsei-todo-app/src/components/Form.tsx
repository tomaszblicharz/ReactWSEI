import React, { FC, useState } from "react";
import styled from "styled-components";
import { TextInput, Button } from "react-native";

import { useDispatch } from "react-redux";
import { setNewElTodoList } from "../actions/todoListAction";
import { ISingleElList } from "../entities/todoSingleEl";

const Wrapper = styled.View`
  margin: 80px 20px 0 20px;
`;
const CustomTextInput = styled.TextInput`
  border: 1px solid;
  padding: 10px;
  color: black;
  width: 100%;
`;
type SetNewElTodoList = ReturnType<typeof setNewElTodoList>;
const Form: FC<{ switchView(formView: boolean) }> = (props) => {
  const dispatch = useDispatch();
  const [nameInput, setNameInput] = useState<string>("");
  const [descInput, setDescrInput] = useState<string>("");
  const nameValueChange = (txt) => {
    setNameInput(txt.nativeEvent.text);
  };
  const descriptionValueChange = (txt) => {
    setDescrInput(txt.nativeEvent.text);
  };
  const saveDate = () => {
    dispatch<SetNewElTodoList>(
      setNewElTodoList({
        name: nameInput,
        description: descInput,
      } as ISingleElList)
    );
    props.switchView(false);
  };
  return (
    <Wrapper>
      <CustomTextInput
        value={nameInput}
        onChange={nameValueChange}
        placeholder="Name"
      />

      <CustomTextInput
        value={descInput}
        onChange={descriptionValueChange}
        placeholder="Description"
      />
      <Button title="zapisz" onPress={saveDate} />
    </Wrapper>
  );
};
export default Form;
