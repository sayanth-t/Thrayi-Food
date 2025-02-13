import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

import RecommentCard from './Recommend';

const RestMenu = () => {

  const [menuData, setMenuData] = useState(null);

  const findMenu = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.8744775&lng=75.37036619999999&restaurantId=250361&catalog_qa=undefined&submitAction=ENTER'
    );
    const menuData = await data.json();
    setMenuData(menuData);
  };

  useEffect(() => {
    findMenu();
  }, []);

  if (!menuData) {
    return <Shimmer />;
  }

  const { name, avgRating, costForTwoMessage, city } =
    menuData?.data?.cards[2]?.card?.card.info;

  const recommended = Object.values(
    menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards
  );

  return (
    <div className="restMenu-container">
      <div className="rest-menu">
        <div className="rest-name-container">
          <h2>{name}</h2>
          <h4>{avgRating}</h4>
          <h4>{costForTwoMessage}</h4>
          <h4>{city}</h4>
        </div>

        <div className='reommended'>
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
