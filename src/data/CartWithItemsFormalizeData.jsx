import React from "react";
import { formatPrice } from "./formatPrice";

function CartWithItemsFormalizeData({ item }) {
  return (
    <div className="cartWithItems__formalize-content">
      <div className="cartWithItems__formalizeCard-name">
        {item.model} ({item.count} dona)
      </div>
      <div className="cartWithItems__formalizeCard-price">
        <p>Narx</p>
        <p>{formatPrice(item.price)} soʻm</p>
      </div>
    </div>
  );
}

export default CartWithItemsFormalizeData;
