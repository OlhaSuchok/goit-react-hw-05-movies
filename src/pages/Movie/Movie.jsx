import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchSearchFilms } from 'services/Api';
import { AccentText } from 'pages/Cast/Cast.styled';
import {
  InputWrapper,
  Input,
  InputButton,
  SearchMovieList,
  SearchMovieListItem,
  NavLinkSearchMovie,
} from './Movie.styled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function Movie() {
  const [query, setQuery] = useState('');
  const [searchFilms, setSearchFilms] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query') ?? '';

  const location = useLocation();

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams(query !== '' ? { query: query } : {});

    if (query === '') {
      toast.warn("Введіть ім'я параметра у пошуку!");
      return;
    }
  };

  useEffect(() => {
    const getSearchFilms = async () => {
      setStatus(Status.PENDING);

      try {
        const {
          data: { results },
        } = await fetchSearchFilms(search);
        setSearchFilms(results);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        setError(console.log(error));
      }
    };

    if (search) {
      getSearchFilms();
    }
  }, [search]);

  return (
    <div>
      <InputWrapper onSubmit={handleSubmit}>
        <Input
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleChange}
        ></Input>
        <InputButton>
          <GoSearch size={24} />
        </InputButton>
      </InputWrapper>
      {searchFilms.length > 0 && (
        <SearchMovieList>
          {searchFilms.map(({ title, id }) => {
            return (
              <SearchMovieListItem key={id}>
                <NavLinkSearchMovie
                  to={`/movies/${id}`}
                  state={{ from: location }}
                >
                  {title}
                </NavLinkSearchMovie>
              </SearchMovieListItem>
            );
          })}
        </SearchMovieList>
      )}
      {searchFilms.length === 0 &&
        status !== Status.IDLE &&
        status !== Status.PENDING && (
          <AccentText>
            Unfortunately, no movies were found for your request. Enter the
            movie title again.
          </AccentText>
        )}
      {status === Status.IDLE && !query && (
        <AccentText>Enter the name of the movie to search.</AccentText>
      )}
      {status === Status.REJECTED && <AccentText>{error.message}.</AccentText>}
    </div>
  );
}
