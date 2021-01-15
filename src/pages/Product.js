import React, { useState } from "react";
import Counter from "../components/Counter";

export default function Product() {
  const [order, setOrder] = useState(0);
  const parentCallbackFunction = (dataFromchild) => setOrder(dataFromchild);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Buy Product</h1>
        <p>Rp. 50.000</p>
        <p>Order: {order}</p>
        <h3>Total:{order * 50000}</h3>
        <br />
        <Counter parentCallback={parentCallbackFunction} />
      </div>
    </>
  );
}
