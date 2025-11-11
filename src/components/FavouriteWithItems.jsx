import { FavItemData } from "../data/data";
import FavouriteWithItemsData from "./FavouriteWithItemsData";

function FavWithItems() {
  return (
    <section className="FavWithItems">
      <div className="container">
        <div className="FavWithItems__wrap">
          {FavItemData.map((item) => (
            <FavouriteWithItemsData item={item} key={item.code} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FavWithItems;
