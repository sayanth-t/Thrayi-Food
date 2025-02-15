import { CLOUDINARY_URL } from '../utils/constants';

const RecommentCard = (menuDetails) => {
  const menuInfo = menuDetails?.menuDetails?.card?.info ;

  const { name, description, imageId , price } = menuInfo;

  return (
    <div>
      <div className="recommended-container">
        <div className="menu-info-container">
          <h3>{name}</h3>
          <h4>Rs {price/100}</h4>
          <p>{description}</p>
        </div>
        <div className="menu-img-container">
          <button className="menu-img-btn">
            <img
              className="menu-img"
              src={CLOUDINARY_URL + imageId}
              alt="menu-img"
            ></img>
          </button>
        </div>
      </div>
      <div className="line-container"></div>
    </div>
  );
};

export default RecommentCard;
