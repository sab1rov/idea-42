import React, { useState } from "react";
import { NotFoundPage } from "../pages";
import DownArrowIcon from "../assets/icons/DownArrowIcon";
import { Link } from "react-router";
import TrashIcon from "../assets/icons/TrashIcon";
import LikeIcon from "../assets/icons/LikeIcon";
import ScalesIcon from "../assets/icons/ScalesIcon";
import { formatPrice } from "./formatPrice";
import LikedIcon from "../assets/icons/LikedIcon";

function CartWithItemsData({ item, onIncrease, onDecrease, onRemove }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };
  return (
    <div className="cartWithItems__itemCard">
      <div className="cartWithItems__img">
        <img src={item.img} alt={item.name} />
      </div>

      <div className="cartWithItems__content">
        <div className="cartWithItems__content-left">
          <div className="cartWithItems__price">
            {formatPrice(item.price)} soʻm
            <button className="cartWithItems__paymentBtn">
              Toʻliq toʻlov <DownArrowIcon />
            </button>
          </div>
          <Link to={NotFoundPage} className="cartWithItems__name">
            {item.name}
          </Link>
          <div className="cartWithItems__itemCode">Mahsulot kodi: {item.code}</div>
        </div>

        <div className="cartWithItems__content-right">
          <div className="cartWithItems__content-icons">
            <button onClick={onRemove} className="cartWithItems__content-icon">
              <TrashIcon />
            </button>
            <button
              onClick={toggleLike}
              className={`cartWithItems__content-icon ${liked ? "liked" : ""}`}
            >
              {liked ? <LikedIcon /> : <LikeIcon />}
            </button>
            <button className="cartWithItems__content-icon">
              <ScalesIcon />
            </button>
          </div>

          <div className="cartWithItems__let-count">
            <button onClick={onDecrease} className="cartWithItems__minus-btn">
              –
            </button>
            <p className="cartWithItems__item-count">{item.count}</p>
            <button onClick={onIncrease} className="cartWithItems__plus-btn">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartWithItemsData;
