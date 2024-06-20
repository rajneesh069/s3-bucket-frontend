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
        <img src={"/app.svg"} className="logo app" alt="App logo" />
      </div>
      <h1>Counter + Todo Generator</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}.
        </button>
        <p>Click on the button to increase the count.</p>
      </div>
      <button
        onClick={() => {
          navigate("/todos");
        }}
      >
        Todo Generator &rarr;
      </button>
    </>
  );
}
