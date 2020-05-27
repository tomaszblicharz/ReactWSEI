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
    default: {
      return state;
    }
  }
};
