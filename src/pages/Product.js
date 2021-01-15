import React, { useState } from "react";
import Counter from "../components/Counter";

export default function Product() {
  const [order, setOrder] = useState(0);

  const counterPlus = () => setOrder(order + 1);
  const counterMinus = () => {
    if (order <= 0) {
      setOrder(0);
    } else {
      setOrder(order - 1);
    }
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Buy Product</h1>
        <p>Rp. 50.000</p>
        <p>Order: {order}</p>
        <h3>Total:{order * 50000}</h3>
        <br />
        <Counter
          orderValue={order}
          counterPlusFunction={counterPlus}
          counterMinusFunction={counterMinus}
        />
      </div>
    </>
  );
}
