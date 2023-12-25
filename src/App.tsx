import { useCallback, useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { CounterState, increase } from "./reducers/counterReducer";
import { useGetDataQuery } from "./services/orgsApi";

function App() {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetDataQuery("ss");
  const { counter } = useSelector((state: any) => {
    return state;
  });

  const [num, setNum] = useState(0);

  const calc = useMemo(() => {
    return 100 * num;
  }, [num]);

  const callback = useCallback(
    function (a: any) {
      console.log(a);
    },
    [num]
  );

  function sum<T>(b: T): T {
    return 10 as T;
  }

  sum(5);
  console.log("return usememo");
  console.log(calc);

  console.log("return callback");
  console.log(callback);
  console.log(callback(900));
  return (
    <div className="App">
      <div>
        use useMemo
        {calc}
      </div>
      <button
        onClick={() => {
          setNum(200);
        }}
      >
        change state
      </button>
      <div>counter value in state</div>
      <div>{counter.value}</div>
      <button
        onClick={() => {
          dispatch(increase());
        }}
      >
        increase
      </button>

      {data &&
        data.map(function (val: any) {
          //    console.log(val);

          return <div> {val && val.login}</div>;
        })}
    </div>
  );
}

export default App;
