import { CLOUDINARY_URL } from '../utils/constants';

// restaurent card component
const RestaurentCard = (props) => {
  const { restData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    areaName,
    costForTwo,
  } = restData.info;
  const { deliveryTime } = restData.info.sla;

  return (
    <div className="rest-card">
      <div className="rest-img-container">
        <img
          className="rest-img"
          src={CLOUDINARY_URL + cloudinaryImageId}
          alt="Rest-img"
        ></img>
      </div>

      <div className="rest-info">
        <h3>{name}</h3>
        <h4>{avgRating}</h4>
        <h4>{cuisines}</h4>
        <h4>{costForTwo}</h4>
        <h4>{areaName}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default RestaurentCard;
