import { useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../../utils/constants";

export default ResCard = (props) => {
  const { cloudinaryImageId, name, avgRating, costForTwo, sla, id } =
    props;
    
  const navigate = useNavigate();

  return (
    <div
      className="res-card"
      onClick={() => {
        console.log("clicked");
        navigate("/restuarant/" + id);
      }}
    >
      <div className="res-logo">
        <img className="res-logo-img" src={IMG_CDN_URL + cloudinaryImageId} />
      </div>
      <div className="card-description">
        <h3>{name}</h3>
        <div className="second-row">
          <p>{avgRating} Stars .</p>
          <p>{sla.deliveryTime} Min</p>
        </div>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};
