import * as actionTypes from "./types/todolistTypes";
import { ISingleElList } from "../entities/todoSingleEl";

export const setNewElTodoList = (newEl: ISingleElList) => ({
  type: actionTypes.SET_NEW_EL,
  newEl,
});
