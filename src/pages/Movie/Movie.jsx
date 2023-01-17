import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchSearchFilms } from 'services/Api';
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
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query') ?? '';

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
      } finally {
        setQuery('');
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
                <NavLinkSearchMovie to={`/movies/${id}`}>
                  {title}
                </NavLinkSearchMovie>
              </SearchMovieListItem>
            );
          })}
        </SearchMovieList>
      )}
      {/* {searchFilms.length === 0 && (
        <p>Нажаль, фільмів за запитом {query} не знайдено.</p>
      )} */}
      {/* {status === Status.PENDING && status !== Status.PENDING && (
        <p>Нажаль, фільмів за запитом {query} не знайдено.</p>
      )} */}
      {status === Status.IDLE && !query && <p>Введіть значення для пошуку.</p>}
    </div>
  );
}
