import { CLOUDINARY_URL } from '../utils/constants';

const RecommentCard = (menuDetails) => {
  const menuInfo = menuDetails?.menuDetails?.card?.info;

  const { name, description, imageId } = menuInfo;

  return (
    <div className="recommended-container">
      <div className="menu-info-container">
        <h2>{name}</h2>
        <p >{description}</p>
      </div>
      <div className="menu-img-container">

        <button className='menu-img-btn'>
          <img
            className="menu-img"
            src={CLOUDINARY_URL + imageId}
            alt="menu-img"
          ></img>
        </button>

      </div>
    </div>
  );
};

export default RecommentCard;
