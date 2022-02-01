import React,{useState} from 'react';
import './App.css';
import {moviesData} from "./moviesData";
import MovieList from './Pages/MovieListe/MovieList';
import Search from './Pages/Search/Search';
import AddMovie from './Pages/AddMovie/AddMovie';
function App() {

//ici on a la creation d'une state contenat la data movie:
const [moviesList,setMoviesList]=useState(moviesData);
//et on fait passer la state comme props qui va vers la movieliste et movie card
//ici on va juste faire la rechere donc deux state , juste le nom et la recherche
const [nameSearch,setNameSearch]=useState('');
//const d'autres elements 
const [name,setName]=useState('');
const [image,setImage]=useState('');
const [rating,setRating]=useState('');
const [date,setDate]=useState('');
const [description,setDescription]=useState('');
//les data a amelioere
//const de search rating on passe ratingsearch lil movile liste bich tben w el zouz lil rate yt3adew 
const [ratingSearch,setRatingSearch]=useState('');
const addMovie=(e)=>{
  e.preventDefault();
let newmovie={
  name:name,
  image:image,
  rating:rating,
  date:date,
  description:description
}
return setMoviesList([...moviesList, newmovie]);
}
  return (
    <div className="App">

      <Search  setNameSearch={setNameSearch} ratingSearch={ratingSearch} setRatingSearch={setRatingSearch}
 />
     <MovieList nameSearch={nameSearch} moviesData={moviesList} ratingSearch={ratingSearch} />
     <AddMovie
        addMovie={addMovie}
        setName={setName}
        setRating={setRating}
        setImage={setImage}
        setDate={setDate}
        setDescription={setDescription}
      />
    </div>
  );
}

export default App;
