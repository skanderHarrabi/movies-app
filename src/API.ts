import axios from 'axios';
import {
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    API_URL,
    API_KEY,
  } from './config';

  const defaultConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Types
  export type Movie = {
    Title: string,
    Poster: string,
    Type:string,
    Year:string,
    imdbID: string
  }

  export type Movies = {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number,
  }

  export type MovieDetails = {
    title: string,
    poster: string,
    plot:string,
    year:string,
    genre: string,
    director: string,
    rating: string,
    time: string,
    revenue: string
  }

  const apiSettings = {
    fetchMovies: async (searchTerm: string, page: number): Promise<Movies> => {
      const endpoint: string = searchTerm
        ? `${SEARCH_BASE_URL}&page=${page}&s=${searchTerm}`
        : `${POPULAR_BASE_URL}&page=${page}`;
      const moviesData = await axios.get(endpoint);
      if(!moviesData.data.Search) {
        return {
          page,
          results: [],
          total_pages: 0,
          total_results: 0
        };
      }

      return {
        page,
        results: moviesData.data.Search,
        total_pages: Math.ceil(moviesData.data.totalResults/10),
        total_results: moviesData.data.totalResults
      };
    },

    fetchMovie: async (movieId: string): Promise<MovieDetails> => {
      const endpoint: string = `${SEARCH_BASE_URL}&i=${movieId}`;
      const moviesData = await axios.get(endpoint);
      const {Title, Poster, Plot, Year, Genre, Director, imdbRating, Runtime, BoxOffice} = moviesData.data;
      return {
        title: Title,
        poster: Poster,
        plot: Plot,
        year: Year,
        genre: Genre,
        director: Director,
        rating: imdbRating,
        time: Runtime,
        revenue: BoxOffice
      };
    },
  };

  export default apiSettings;
