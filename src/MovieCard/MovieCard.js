import React from 'react'
import { Card,Button } from 'react-bootstrap'
import MovieRating from '../components/Rating/Rating'

const MovieCard = ({movie}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>{movie.description} </Card.Text>
          <MovieRating isMovieRating={true} movieRating= {movie.rate} />
          <br></br>
            <Button variant="primary">watch</Button>
        </Card.Body>
        </Card>
    </div>
  )
}

export default MovieCard