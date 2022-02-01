import React from 'react';
import Rate from './Rate';


const Search = ({setNameSearch,ratingSearch,setRatingSearch}) => {
  return (
    <div>
      <div className='search-container' style={{display:"flex",justifyContent:"space-around"}}>
        <input
          type='text'
          placeholder='Type movie name to search'
       onChange={(el)=>setNameSearch(el.target.value)}
        />
        <Rate rating={ratingSearch} starIndex={setRatingSearch} />
      </div>
    </div>
  );
};

export default Search;