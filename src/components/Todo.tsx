import { useRecoilValue } from "recoil";
import { Todo as TodoType } from "../utils/todoGenerator";
import { todoStates } from "../store/atoms/todoAtomFamily";
import { ChangeEvent, useState } from "react";
import { Suspense } from "react";

export default function Todos() {
  const [input, setInput] = useState<number>(0);
  const [num, setNum] = useState<number>(0);
  return (
    <div
      style={{
        display: "flex",
        padding: 2,
        flexDirection: "column",
        gap: 10,
        height: "100%",
      }}
    >
      <div
        style={{
          border: "2px solid white",
          display: "flex",
          padding: 4,
          flexDirection: "column",
          gap: 3,
        }}
      >
        <input
          color="white"
          placeholder="Input a number"
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setInput(Math.abs(Math.floor(Number(e.target.value))));
          }}
        />
        <button
          onClick={() => {
            setNum(input);
          }}
        >
          Generate Todos
        </button>
      </div>
      <div>
        <ShowTodos num={num} />
      </div>
    </div>
  );
}

export function ShowTodos({ num }: { num: number }): JSX.Element {
  //I will use Suspense API for this one and NOT useRecoilStateLoadable.
  const todos = useRecoilValue(todoStates(num));
  return (
    <Suspense fallback={"Input a value."}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          marginBottom: 3,
        }}
      >
        {todos.map((todo: TodoType) => (
          <TodoCard title={todo.title} description={todo.description} />
        ))}
      </div>
    </Suspense>
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
          border: "1px solid white",
          padding: 3,
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
