import React from "react";
import CartEmptyImg from "/images/basket-empty.png";
import { Link, Links } from "react-router";

function CartEmpty() {
    function ToHomePage() {
        <Link to={"/"}></Link>
    }

  return (
    <section className="cart">
      <div className="container">
        <div className="cart__wrap">
          <div className="cart__content">
            <div className="cart__empty-img">
              <img src={CartEmptyImg} alt="empty cart" />
            </div>
            <div className="cart__title">
              Savatchada hozircha hech narsa yoʻq
            </div>
            <div className="cart__subtitle">
              Siz xaridni asosiy sahifadan boshlashingiz yoki qidiruvdan
              foydalanishingiz mumkin
            </div>
            <button onClick={ToHomePage} className="cart__button">Bosh sahifaga o'tish</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartEmpty;
