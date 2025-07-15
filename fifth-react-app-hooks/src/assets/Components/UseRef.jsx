import { useRef, useState } from "react";

function UseRef() {
  const arr = [];
  const inputRef = useRef("");
  const [Data, setData] = useState(arr);
  const handleAdd = (input) => {
    if (input.current.value !== "") {
      setData([...Data, input.current.value]);
      input.current.value = "";
    }
  };

  const handleReset = () => {
    setData([]);
    inputRef.current.value = "";
  };

  const handleDelete = (index) => {
    const newData = Data.filter((_, i) => i !== index);
    setData(newData);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>
        <u>Use Ref Hook</u>:-
      </h2>

      <input type="text" ref={inputRef} />
      <button onClick={() => handleAdd(inputRef)}>Add</button>
      <button onClick={handleReset}>Reset</button>
      <ul>
        {Data.map((item, index) => (
          <li key={index}>
            {item}
            <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseRef;
