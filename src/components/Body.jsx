import { useEffect, useState } from "react";
import Restaurant from "./Restaurents/Restaurant";

export default Body = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [displayRestaurants, setDissplayRestaurants] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4065&lng=78.4772&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const restaurants =
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(restaurants);
    setDissplayRestaurants(restaurants);
  };

  return (
    <div className="body">
      <Restaurant restaurants={displayRestaurants} />
    </div>
  );
};
