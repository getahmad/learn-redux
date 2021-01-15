import React, { useState } from "react";

export default function Counter(props) {
  const [order, setOrder] = useState(0);

  const counterPlus = () => {
    setOrder(order + 1);
    sendToParent(order + 1);
  };

  const counterMinus = () => {
    if (order <= 0) {
      setOrder(0);
      sendToParent(0);
    } else {
      setOrder(order - 1);
      sendToParent(order - 1);
    }
  };

  const sendToParent = (data) => {
    props.parentCallback(data);
  };

  return (
    <div>
      <button onClick={counterMinus}>-</button>
      <input type="text" value={order} readOnly />
      <button onClick={counterPlus}>+</button>
    </div>
  );
}
