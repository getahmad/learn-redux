import React, { useState } from "react";

export default function Product() {
  const [order, setOrder] = useState(0);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Buy Product</h1>
        <p>Rp. 50.000</p>
        <p>Order: {order}</p>
        <h3>Total:{order * 50000}</h3>
        <br />
        <button onClick={() => (order === 0 ? order : setOrder(order - 1))}>
          -
        </button>
        <input type="text" value={order} readOnly />
        <button onClick={() => setOrder(order + 1)}>+</button>
      </div>
    </>
  );
}
