

import React from 'react';

const Rate = ({ starIndex = () => {}, rating }) => {
  const stars = (x) => {
    let star = [];
    for (let i = 0; i < 5; i++) {
      if (i < x) {
        star.push(
          <span className='rating' onClick={() => starIndex(i + 1)}>
            ★
          </span>
        );
      } else {
        star.push(
          <span
            className='rating'
            style={{ cursor: 'pointer' }}
            onClick={() => starIndex(i + 1)}
          >
            ☆
          </span>
        );
      }
    }
    return star;
  };
  return <div>{stars(rating)}</div>;
};

export default Rate;
// import React from 'react';
// import ReactStars from 'react-stars'



// const Rate = () => {
//   const ratingChanged = (newRating) => {
//     console.log(newRating)
//   }
//   return <div>
//     <ReactStars
//   count={5}
//   onChange={ratingChanged}
//   size={24}
//   color2={'#ffd700'} />
//   </div>;
// };

// export default Rate;
