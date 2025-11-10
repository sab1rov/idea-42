import React from 'react'
import { Link } from 'react-router'
import LikeIcon from "../assets/icons/ShoppingCartIcon";
import TrashIcon from '../assets/icons/TrashIcon'
import ScalesIcon from '../assets/icons/ScalesIcon'
import NotFoundPage from '../pages/NotFoundPage';

function FavouriteWithItemsData({ item }) {
  return (
    <div className="cartWithItems__itemCard">
            <div className="cartWithItems__img">
              <img src={item.img} alt="item img" />
            </div>
            <div className="cartWithItems__content">
              <div className="cartWithItems__content-left">
                <div className="cartWithItems__price">
                  {item.price}
                  <p>х 6 мес</p>
                </div>
                <Link to={NotFoundPage} className="cartWithItems__name">
                  {item.name}
                </Link>
                <div className="cartWithItems__itemCode">
                  {item.code}
                </div>
              </div>
              <div className="cartWithItems__content-right">
                <div className="cartWithItems__content-icons">
                  <Link className="cartWithItems__content-icon">
                    <TrashIcon />
                  </Link>
                  <Link className="cartWithItems__content-icon">
                    <LikeIcon />
                  </Link>
                  <Link className="cartWithItems__content-icon">
                    <ScalesIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
  )
}

export default FavouriteWithItemsData
