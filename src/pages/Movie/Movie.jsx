import { useState, useEffect } from 'react';
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
  const [error, setError] = useState(null);

  const handleSearchFilms = event => {
    setQuery(event.currentTarget.value.toLowerCase());
    console.log(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query === '') {
      toast.warn("Введіть ім'я параметра у пошуку!");
      return;
    }

    const getSearchFilms = async () => {
      setStatus(Status.PENDING);

      try {
        const {
          data: { results },
        } = await fetchSearchFilms(query);

        setSearchFilms(results);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        setError(console.log(error));
      } finally {
        setQuery('');
      }
    };

    if (query.length > 0) {
      getSearchFilms();
    }
  };

  // useEffect(() => {
  // const getSearchFilms = async () => {
  //   setStatus(Status.PENDING);

  //   try {
  //     const {
  //       data: { results },
  //     } = await fetchSearchFilms(query);

  //     setSearchFilms(results);
  //     setStatus(Status.RESOLVED);
  //   } catch (error) {
  //     setStatus(Status.REJECTED);
  //     setError(console.log(error));
  //   }
  // };

  // if (query) {
  //   getSearchFilms();
  // }
  // }, [query]);

  return (
    <div>
      <InputWrapper onSubmit={handleSubmit}>
        <Input
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleSearchFilms}
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
