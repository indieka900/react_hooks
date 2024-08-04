import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1, showText: state.showText };

    case "toggleShowText":
      return { value: state.value, showText: !state.showText };

    default:
      break;
  }
};

export default function ReducerHook() {
  const [state, dispatch] = useReducer(reducer, {
    value: 0,
    showText: true,
  });

  return (
    <div>
      <h1>{state.value}</h1>
      <button
        type="button"
        onClick={() => {
            dispatch({ type: "INCREMENT" });
            dispatch({ type: "toggleShowText" });
        }}
      >
        Increament
      </button>
      {state.showText && <p>This is the text</p>}
      <br />
    </div>
  );
}
