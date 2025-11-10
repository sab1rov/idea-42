import React from "react";
import { Link } from "react-router";

function FavouriteEmpty() {
  return (
    <div className='favourite'>
      <div className="container">
        <div className="favourite__wrap">
          <div className="favourite__content">
            <img src="/images/heart-empty.png" alt="empty" />
            <div className="favourite__title">В избранном пока ничего нет</div>
            <p className="favourite__subtitle">Вы можете добавлять товары кликая на сердечко , которое находится прямо на карточке товара</p>
            <button  className="favourite__button"><Link to={"/"}>Перейти в главное меню</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavouriteEmpty;
