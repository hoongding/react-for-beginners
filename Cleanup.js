import { useState, useEffect } from "react";
function Hello() {
  function destroyedFn() {
    console.log("bye :(");
  }
  function createFn() {
    // 생성될 때 이 함수가 호출됨
    console.log("created :)");
    return destroyedFn; // destroy 될 때 이 함수가 return됨.
  }
  useEffect(createFn, []);

  useEffect(() => {
    // Case 1
    console.log("hi");
    return () => console.log("bye");
  }, []);

  useEffect(function () {
    //Case 2
    console.log("hi");
    return function () {
      console.log("bye");
    };
  }, []);

  return <h1>Hello!</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = (event) => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
