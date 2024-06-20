import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { count as countSelector } from "../store/selector/countSelector";
import { countState } from "../store/atoms/counterAtom";
import { useNavigate } from "react-router-dom";

export default function Counter() {
  const navigate = useNavigate();
  const count = useRecoilValue(countSelector);
  const setCount = useSetRecoilState(countState);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Counter</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Click on the button to increase the count.</p>
      </div>
      <button
        onClick={() => {
          navigate("/todos");
        }}
      >
        Todo &rarr;
      </button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
