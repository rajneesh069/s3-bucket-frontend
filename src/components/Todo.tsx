import { generateTodos, Todo as TodoType } from "../utils/todoGenerator";

export default function Todo() {
  const todos: TodoType[] = generateTodos();
  return (
    <>
      {todos.map((todo: TodoType) => (
        <TodoCard title={todo.title} description={todo.description} />
      ))}
    </>
  );
}

export function TodoCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          marginBottom: 5,
        }}
      >
        <p>Title : {title}</p>
        <p>Description : {description}</p>
      </div>
    </>
  );
}
