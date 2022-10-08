import React from 'react';
// //hook
import { useHomeFetch } from '../hooks/usehomeFetch';
import Button from '../components/Button';
import Grid from '../components/Grid';
import SearchBar from '../components/SearchBar';
import Spinner from '../components/Spinner';
import Thumb from '../components/Thumb';
// //image
import NoImage from '../images/no_image.jpg';

const Home: React.FC = () => {
  const {
    state,
    isLoading,
    isError,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore
  } = useHomeFetch();

  if (isError) return <div>Something went wrong ...</div>;

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
      { state.results.map((movie) => (
        <Thumb
        key={movie.imdbID}
        clickable
        image={
          movie.Poster != "N/A" ?
            movie.Poster
            :
            NoImage
        }
        movieId={movie.imdbID}
      />
        )
      )}
      </Grid>
      {isLoading && <Spinner/>}
      {state.page < state.total_pages && !isLoading && (
        <Button text='Load More' callback={() => setIsLoadingMore(true)}/>
      )}
    </>
  );
};

export default Home;
