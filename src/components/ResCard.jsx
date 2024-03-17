import { IMG_CDN_URL } from "../utils/constants";
export default RestroComponent = (props) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = props;
  console.log(props);

  return (
    <div className="res-card">
      <img className="res-logo" src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} Stars</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};
