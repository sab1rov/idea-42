import React, { useState } from "react";
import { cartItemData } from "../data/data";
import CartWithItemsData from "../data/CartWithItemsData";
import CartWithItemsFormalizeData from "../data/CartWithItemsFormalizeData";
import { formatPrice } from "../data/formatPrice";

function CartWithItems() {
  const [items, setItems] = useState(cartItemData);

  const updateCount = (index, change) => {
    const updated = [...items];
    updated[index].count = Math.max(1, updated[index].count + change);
    setItems(updated);
  };

  const removeItem = (code) => {
    const updated = items.filter((item) => item.code !== code);
    setItems(updated);
  };

  const total = items.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <section className="cartWithItems">
      <div className="container">
        <div className="cartWithItems__wrap">
          <div className="cartWithItems__cards">
            {items.map((item, index) => (
              <CartWithItemsData
                key={item.code}
                item={item}
                onIncrease={() => updateCount(index, +1)}
                onDecrease={() => updateCount(index, -1)}
                onRemove={() => removeItem(item.code)}
              />
            ))}
          </div>

          <div className="cartWithItems__formalizeCard">
            <div className="cartWithItems__formalizeCard-title">
              Sizning savatchangiz
            </div>

            <div className="cartWithItems__formalize-info">
              {items.map((item) => (
                <CartWithItemsFormalizeData key={item.code} item={item} />
              ))}
            </div>

            <hr />
            <div className="cartWithItems__formalizeCard-paymentInfo">
              <p>Sizning to‘lovingiz:</p>
              <p>{formatPrice(total)} soʻm</p>
            </div>
            <p className="cartWithItems__formalizeCard-totalPrice">
              = {formatPrice(total)} soʻm
            </p>

            <button className="cartWithItems__formalizeCardBtn">
              Rasmiylashtirish
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartWithItems;
