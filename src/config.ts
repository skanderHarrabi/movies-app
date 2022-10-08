const API_URL: string = 'https://www.omdbapi.com/';
const API_KEY: string = '12bfca68';

const SEARCH_BASE_URL: string = `${API_URL}?apikey=${API_KEY}`;
const POPULAR_BASE_URL: string = `${API_URL}?apikey=${API_KEY}&s=fall`;

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY
};
