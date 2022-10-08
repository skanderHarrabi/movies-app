import React from 'react';
import { useParams } from 'react-router';
//components
import MovieInfoBar from '../components/MovieInfoBar';
import MovieInfo from '../components/MovieInfo';
import BreadCrumb from '../components/BreadCrumb';
import Spinner from '../components/Spinner';
//hook
import { useMovieFetch } from '../hooks/useMovieFetch';

const Movie: React.FC = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId as string);

  if (loading) return <Spinner/>;
  if (error) return <div>Something went wrong ...</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.time}
        genre={movie.genre}
        revenue={movie.revenue}
      />
    </>
  );
};

export default Movie;
