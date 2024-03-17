import { IMG_CDN_URL } from "../../utils/constants";

export default ResCard = (props) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    props;
  console.log(props);

  return (
    <div className="res-card">
      <div className="res-logo">
        <img className="res-logo-img" src={IMG_CDN_URL + cloudinaryImageId} />
      </div>
      <div className="card-description">
        <h3>{name}</h3>
        <div className="second-row">
          <p >{avgRating} Stars .</p>
          <p>{sla.deliveryTime} Min</p>
        </div>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};
