import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    // 딱 한번만 실행됨.
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    // keyword state가 변화할때만 실행됨
    console.log("I run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    // counter state가 변화할때만 실행됨
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    // keyword, counter state가 변화할때만 실행됨
    console.log("I run when 'counter & keyword' changes");
  }, [counter, keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search Here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
