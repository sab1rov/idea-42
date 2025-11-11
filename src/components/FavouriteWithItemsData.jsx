import React from 'react'
import { Link } from 'react-router'
import LikeIcon from "../assets/icons/ShoppingCartIcon";
import TrashIcon from '../assets/icons/TrashIcon'
import ScalesIcon from '../assets/icons/ScalesIcon'
import NotFoundPage from '../pages/NotFoundPage';

function FavouriteWithItemsData({ item }) {
  return (
    <div className="FavWithItems__itemCard">
            <div className="FavWithItems__img">
              <img src={item.img} alt="item img" />
            </div>
            <div className="FavWithItems__content">
              <div className="FavWithItems__content-left">
                <div className="FavWithItems__price">
                  {item.price}
                  <p>х 6 мес</p>
                </div>
                <Link to={NotFoundPage} className="FavWithItems__name">
                  {item.name}
                </Link>
                <div className="FavWithItems__itemCode">
                  {item.code}
                </div>
              </div>
              <div className="FavWithItems__content-right">
                <div className="FavWithItems__content-icons">
                  <Link className="FavWithItems__content-icon">
                    <TrashIcon />
                  </Link>
                  <Link className="FavWithItems__content-icon">
                    <LikeIcon />
                  </Link>
                  <Link className="FavWithItems__content-icon">
                    <ScalesIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
  )
}

export default FavouriteWithItemsData
