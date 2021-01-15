import React from "react";

export default function Counter(props) {
  return (
    <div>
      <button onClick={props.counterMinusFunction}>-</button>
      <input type="text" value={props.orderValue} readOnly />
      <button onClick={props.counterPlusFunction}>+</button>
    </div>
  );
}
