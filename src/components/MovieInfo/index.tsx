import React from 'react';
//components
import Thumb from '../Thumb';
//image
import NoImage from '../../images/no_image.jpg';
//styles
import './movieInfo.scss';
// Types
import { MovieDetails } from '../../API';

type Props = {
  movie: MovieDetails,
}

const imageBackground = (poster: string) => (
{
  background: poster != "N/A" ? `url(${poster})` : '#000',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
})

const MovieInfo: React.FC<Props> = ({ movie }) => (
  <div className="movie-info_wrapper" style={imageBackground(movie.poster)}>
    <div className="movie-info_content">
      <Thumb
        image={
          movie.poster != "N/A" ?
            movie.poster
            :
            NoImage
        }
        clickable={false}
      />
      <div className="movie-info_text">
        <h1>{movie.title}</h1>
        <h3>PLOT</h3>
        <p>{movie.plot}</p>

        <div className='rating-directors'>
          <div>
            <h3>RATING</h3>
            <div className='score'>{movie.rating}</div>
          </div>
          <div className='director'>
            <h3>DIRECTOR</h3>
            <p>{movie.director}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default MovieInfo;
