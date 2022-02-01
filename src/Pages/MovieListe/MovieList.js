import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({moviesData,nameSearch,ratingSearch}) => {
  return <div style={{display:"flex",justifyContent:"space-around",marginTop:"50px" ,flexWrap:"wrap",alignContent:"space-around"}}> 
  {/* ici on va maper les donner selon le key ey element pour avoir le scartesselon l'id et selon contenu */}
{/* donc ici on passe la props qui va etre nomé movie et elle prend la valeur d'element , el key c pour joinbdre l'id */}
  {
moviesData
.filter(
  (el)=>   el.rating >= ratingSearch &&el.name.toLowerCase().includes(nameSearch.toLowerCase().trim())

)

.map((el,i)=>(
<MovieCard key={i} movie={el}/>
))}
  </div>;
};

export default MovieList;

// The includes() method returns true if an array contains a specified value.array.includes(element, start)
//The trim() function removes whitespace and other predefined characters from both sides of a string.

