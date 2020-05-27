import React, { FC, useState } from "react";
import styled from "styled-components";
import { TextInput, Button, View } from "react-native";

import { useDispatch } from "react-redux";
import { setNewElTodoList } from "../actions/todoListActions";
import { ISingleElList } from "../entities/todoSingleEl";

const Wrapper = styled.View`
  margin: 80px 20px 0 20px;
  color: black;
`;

const CustomTitle = styled.TextInput`
  border: 1px solid;
  padding: 10px;
  color: black;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  font-size: 25px;
  background-color: #ff9900;
`;
const CustomDescription = styled.TextInput`
  border: 1px solid;
  padding: 10px;
  color: black;
  width: 100%;
  border-radius: 10px;
  min-height: 100px;
  font-size: 15px;
  background-color: #ffcc66;
`;
const ButtonSave = styled.View`
  border: 1px solid;
  padding: 10px;
  color: black;
  width: 100%;
  border-radius: 10px;
  height: 40px;
  font-size: 15px;
  color: black;
  background-color: #00ff00;
  width: 80px;
`;
const ButtonBack = styled.View`
  border: 1px solid;
  padding: 10px;
  color: black;
  width: 100%;
  border-radius: 10px;
  height: 40px;
  width: 80px;
  font-size: 15px;
  background-color: #ff3300;
  z-index: 999;
`;
const SButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

type SetNewElTodoList = ReturnType<typeof setNewElTodoList>;
const Form: FC<{ switchView(formView: boolean) }> = (props) => {
  const dispatch = useDispatch();
  const [titleInput, setTitleInput] = useState<string>("");
  const [descInput, setDescrInput] = useState<string>("");
  const titleValueChange = (txt) => {
    setTitleInput(txt.nativeEvent.text);
  };
  const descriptionValueChange = (txt) => {
    setDescrInput(txt.nativeEvent.text);
  };
  const saveDate = () => {
    if (titleInput.length > 0) {
      dispatch<SetNewElTodoList>(
        setNewElTodoList({
          title: titleInput,
          description: descInput,
        } as ISingleElList)
      );
      props.switchView(false);
    } else {
      alert("Cannot send empty list");
    }
  };
  const goToForm = () => {
    props.switchView(false);
  };

  return (
    <Wrapper>
      <CustomTitle
        value={titleInput}
        onChange={titleValueChange}
        placeholder="Title"
      />

      <CustomDescription
        value={descInput}
        onChange={descriptionValueChange}
        placeholder="Description"
      />
      <SButtons>
        <Button title="Save" onPress={saveDate} />
        <ButtonBack>
          <Button title="Back" onPress={goToForm} />
        </ButtonBack>
      </SButtons>
    </Wrapper>
  );
};
export default Form;
