import { useState, useEffect } from "react";
import API, { MovieDetails } from '../API';

export const useMovieFetch = (movieId: string) => {
  const [ state, setState ] = useState<MovieDetails>({} as MovieDetails );
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);

        setState({
          ...movie
        });

        setLoading(false);

      } catch (error) {
        setError(true);
      };
    };

    fetchMovie();
  }, [movieId]);

  return { state, loading, error };
};
