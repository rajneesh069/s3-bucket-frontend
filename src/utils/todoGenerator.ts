export interface Todo {
  id: number;
  title: string;
  description: string;
}

export function generateTodos(): Todo[] {
  const todos: Todo[] = [];
  for (let i = 0; i < Math.random() * 8 + 1; i++) {
    const todo: Todo = {
      id: i,
      title: `Random Title ${i}`,
      description: `Random Description ${i}`,
    };
    todos.push(todo);
  }
  return todos;
}
