import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import RestaurentCard from './RestCard';
import Shimmer from './Shimmer';
import TopRestCard from './TopRestCard';

// custom hooks
import useGetOnlineStatus from '../utils/useGetOnlineStatus';


// body component
const Body = () => {

  const [ TopRestList , setTopRestList ] = useState([]) ;

  const [restList, setRestList] = useState([]);

  const [filterdRestList, setfilterdRestList] = useState([]);

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.8744775&lng=75.37036619999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );

    const jsonData = await data.json();

    setRestList(
      jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilterdRestList(
      jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setTopRestList(
      jsonData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    )
  };

  const onlineStatus = useGetOnlineStatus() ;
  if(!onlineStatus){
    return <div className='offline-msg-container'>
      <h2 >You are currently offline..</h2>
    </div>
  }

  // showing restList is loading => CONDETIONAL RENDERING
  if (restList.length === 0 && TopRestList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Restuarents"
          className="input-search"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        ></input>

        <button
          className="search-btn"
          onClick={() => {
            const searchRest = restList.filter((rest) =>
              rest.info.name
                .toLowerCase()
                .includes(searchValue.toLowerCase().trim())
            );
            setfilterdRestList(searchRest);
          }}
        >
          Search
        </button>
      </div>

      <h2>Top restaurant chains in Kannur</h2>
      <div className='top-rest-outer-container' >
        <div className="top-rest-container">
          <div className='top-rest-row'>
            {TopRestList.map((rest) => (
              <TopRestCard key={rest.info.id} restData={rest} />
            ))}
          </div>
        </div>
      </div>
      

      <h2>Restaurants with online food delivery in Kannur</h2>
      <div className="filter-container">
        <div className="filter-top-rated">
          <button
            className="filter-btn"
            onClick={() => {
              const restFiltered = restList.filter(
                (rest) => rest.info.avgRating >= 4.5
              );
              setfilterdRestList(restFiltered);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>
      <div className="food-container">
        {filterdRestList.map((rest) => (
          <Link to={`/restaurent-menu/${rest.info.id}`} key={rest.info.id} className='rest-menu-link' >
            <RestaurentCard key={rest.info.id} restData={rest} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
