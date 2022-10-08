import React from 'react';
//helpers
import { calcTime } from '../../helpers';
//styles
import './movieInfoBar.scss';
// Types
type Props = {
  time: string,
  genre: string,
  revenue: string,
}

const MovieInfoBar: React.FC<Props> = ({ time, genre, revenue }) => (
  <div className="movie-info-bar_wrapper">
    <div className="movie-info-bar_content">
      <div className='movie-info-bar_column'>
        <p>Running time: {time ? calcTime(time) : 'N/A'}</p>
      </div>
      <div className='movie-info-bar_column'>
        <p>Genre: {genre ? genre : 'N/A'}</p>
      </div>
      <div className='movie-info-bar_column'>
        <p>Revenue: {revenue ? revenue : 'N/A'}</p>
      </div>
    </div>
  </div>
);

export default MovieInfoBar;
