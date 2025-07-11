import { useState } from "react";

function UseState() {
  const [Data, setData] = useState(0);

  const subOne = () => {
    setData(Data - 1);
  };

  const addOne = () => {
    setData(Data + 1);
  };

  const init = () => {
    setData(0);
  };

  return (
    <>
      <h2>
        <u>useState Hook</u> :-
        <br />
        <button onClick={subOne}>Sub 1</button>
        <p>{Data}</p>
        <button onClick={addOne}>Add 1</button>
        <button onClick={init}>Init</button>
      </h2>
    </>
  );
}

export default UseState;
