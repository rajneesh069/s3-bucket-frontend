import { atomFamily, selectorFamily } from "recoil";
import { generateTodos, Todo } from "../../utils/todoGenerator";

export const todoStates = atomFamily<Todo[], number>({
  key: "todoStates",
  default: selectorFamily({
    key: "todos/default",
    get: (num: number) => () => {
      const todos: Todo[] = generateTodos(num);
      return todos;
    },
  }),
});
