import { FavItemData } from "../data/data";
import FavouriteWithItemsData from "./FavouriteWithItemsData";

function CartWithItems() {
  

  return (
    <section className="cartWithItems">
      <div className="container">
        <div className="cartWithItems__wrap">
          {
            FavItemData.map(item => (
              <FavouriteWithItemsData item={item} key={item.code} />
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default CartWithItems;
