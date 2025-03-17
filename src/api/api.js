const api_key = import.meta.env.VITE_API_KEY;
const url = import.meta.env.VITE_BASE_URL;
const discover_url = "https://api.themoviedb.org/3"

export const getMovies = async (type) => {
  try {
    const response = await fetch(`${discover_url}/${type}/movie?api_key=${api_key}&language=en-US&page=1`);
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    console.error('API Key:', api_key ? 'Present' : 'Missing');
    return [];
  }
};

export const getTvShows = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching TV shows:', error);
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${url}/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

export const searchTvShows = async (query) => {
  try {
    const response = await fetch(
      `${url}/search/tv?api_key=${api_key}&language=en-US&query=${query}&page=1`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error searching TV shows:', error);
    return [];
  }
};