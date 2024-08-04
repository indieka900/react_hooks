import { useState } from "react";

export default function StateTutorial() {
  const [value, setValue] = useState(0);
  const [inputVal, setInputVal] = useState("j");

    function increase(){
        setValue((current) => current + 1)
    }

  return (
    <div>
      <h1>{value}</h1>
      <button type="button" onClick={increase}>
        Increament
      </button>
      <br />
      <br />
      <h2>{inputVal}</h2>
      <input type="text" onChange={(e) => setInputVal(e.target.value)} value={inputVal}/>
      <button onClick={() => setInputVal("")}>Clear</button>

    </div>
  );
}
