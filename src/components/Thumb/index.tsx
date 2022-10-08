import React from 'react';
import { Link } from 'react-router-dom';
//styles
import './thumb.scss';
//Types
type Props = {
  image: string,
  movieId?: string,
  clickable: boolean,
}

const Thumb: React.FC<Props> = ({ image, movieId, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <img className="thumb_image" src={image} alt='movie-thumb'/>
        </Link>
      ) : (
        <img className="thumb_image" src={image} alt='movie-thumb'/>
      )}
    </div>
  );
};

export default Thumb;
