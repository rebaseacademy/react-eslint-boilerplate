import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { getPopularMovies, searchMovies } from './api';
import Header from './components/Header';
import Movie from './components/Movie';
import SearchForm from './components/SearchForm';

const MoviesWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 10px;
  justify-content: center;
  margin: 50px 0;
`;

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch(() => {
        setError('There was an error getting results');
      });
  }, []);

  const findMovies = (term) => {
    searchMovies(term)
      .then(setMovies)
      .catch(() => {
        setError('Error searching movies');
      });
  };

  return (
    <>
      <Header>
        <SearchForm onSearch={findMovies} />
      </Header>
      <MoviesWrapper>
        {error && <div>{error}</div>}
        {!error &&
          movies.map((movie) => (
            <Movie
              key={movie.id}
              title={movie.title}
              description={movie.overview}
              image={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            />
          ))}
      </MoviesWrapper>
    </>
  );
}

export default App;
