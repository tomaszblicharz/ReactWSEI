import * as actionTypes from "../actions/types/todolistTypes";
import { ISingleElList } from "../entities/todoSingleEl";

export interface ITodoListReducer {
  todoList: ISingleElList[];
}

const defaultState = (): ITodoListReducer => ({
  todoList: [],
});

export default (state = defaultState(), action: any): ITodoListReducer => {
  switch (action.type) {
    case actionTypes.SET_NEW_EL: {
      return {
        ...state,
        todoList: [...state.todoList, action.newEl],
      };
    }
    case actionTypes.REMOVE_EL: {
      return {
        ...state,
        todoList: state.todoList.filter((elem) => elem.id !== action.elemId),
      };
    }
    default: {
      return state;
    }
  }
};
