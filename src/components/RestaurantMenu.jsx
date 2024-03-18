import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, MENU_URL } from "../utils/constants";

export default RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const [menuData, setMenuData] = useState(null);

  const { resId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const menuJson = await data.json();

    console.log(menuJson?.data.cards);
    setMenuData(menuJson);
  };

  if (!menuData) {
    return <div> Loading ....</div>;
  }

  const { name } = menuData?.data.cards[0].card.card.info;
  const cards =
    menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;

  return (
    <div>
      <h3> {name}</h3>
      <p>Menu</p>
      {cards.map((card, index) => {
        const { title, itemCards } = card?.card?.card;
        return (
          <ItemSection
            key={index}
            titleProp={title}
            itemCardsProp={itemCards}
          />
        );
      })}
    </div>
  );
};

const ItemSection = ({ titleProp, itemCardsProp }) => {
  return (
    <div className="item-section">
      <h3>{titleProp}</h3>

      <div className="sub-item-section">
        {itemCardsProp?.map((item) => (
          <ItemCard key={item?.card?.info?.id} itemProp={item}></ItemCard>
        ))}
      </div>
    </div>
  );
};

const ItemCard = ({ itemProp }) => {
  const { name, imageId } = itemProp?.card?.info;

  return (
    <div className="item-card">
      <p>{name}</p>
      <img src={IMG_CDN_URL + imageId}></img>
    </div>
  );
};
