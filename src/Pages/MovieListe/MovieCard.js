import React from 'react';
import { Card,Button } from 'react-bootstrap';
import './movieCard.css';
import ReactStars from 'react-stars'

// ici on passe la props movie qui va ensuite etre nome element par element ou desctructoring 
const MovieCard = ({movie}) => {
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  return <div>
 

  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.image} />
  <Card.Body>
    <Card.Title>{movie.name}</Card.Title>
    <Card.Title>{movie.date}</Card.Title>
   
    <Card.Text>
    {movie.description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  {/* ici on passe le component rating par le document et on  */}
  <ReactStars
  count={5}
  value={movie.rating}
  size={24}
  color2={'#ffd700'} />
  
</Card>


  
  </div>;
};

export default MovieCard;
