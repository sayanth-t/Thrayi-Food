
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

import RecommentCard from './Recommend';
import useGetRestMenu from '../utils/useGetRestMenu';

const RestMenu = () => {
  
  const {restId} = useParams() ;

  // calling custom hook to fetch data
  const menuData = useGetRestMenu(restId) ;
  
  if ( menuData === null ) {
    return <Shimmer />;
  } 

  const { name, avgRating, costForTwoMessage, city } =
    menuData?.data?.cards[2]?.card?.card.info;

  const recommended = Object.values(
    menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards ||  menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards
  );

  return (
    <div className="restMenu-container">
      <div className="rest-menu">
        <div className="rest-name-container">
          <div>
            <h2>{name}</h2>
          </div>
        </div>

        <div className="rest-info-container">
          <div className="rest-info-inner-container">
            <div>
              <h4>
                {avgRating} . {costForTwoMessage}{' '}
              </h4>
            </div>
            <div>
              <h4>{city}</h4>
            </div>
            <div></div>
          </div>
        </div>

        <div className="recommended">
          <h3>Recommended</h3>
          {recommended.map((menu) => (
            <RecommentCard key={menu?.card?.info?.id} menuDetails={menu} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestMenu;
