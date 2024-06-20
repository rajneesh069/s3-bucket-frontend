export interface Todo {
  id: number;
  title: string;
  description: string;
}

export function generateTodos(numOfTodos: number): Todo[] {
  const todos: Todo[] = [];
  for (let i = 0; i < numOfTodos; i++) {
    const todo: Todo = {
      id: i + 1,
      title: `Random Title ${i + 1}`,
      description: `Random Description ${i + 1}`,
    };
    todos.push(todo);
  }
  return todos;
}
