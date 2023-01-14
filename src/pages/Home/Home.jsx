import { useState, useEffect } from 'react';
import { fetchListFilms } from 'services/Api';
// import Header from 'pages/Header/Header';
import {
  HomeTitle,
  HomeList,
  HomeListItem,
  NavLinkStyle,
} from 'pages/Home/Home.styled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function Home() {
  const [films, setFilms] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFilms = async () => {
      setStatus(Status.PENDING);
      try {
        const {
          data: { results },
        } = await fetchListFilms();

        setFilms(results);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        setError(error);
      }
    };
    getFilms();
  }, [status, error]);

  return (
    <>
      <HomeTitle>TRENDING TODAY</HomeTitle>
      {films.length > 0 && (
        <HomeList>
          {films.map(({ title, id }) => {
            return (
              <HomeListItem key={id}>
                <NavLinkStyle to={`/movies/${id}`}>{title}</NavLinkStyle>
              </HomeListItem>
            );
          })}
        </HomeList>
      )}
    </>
  );
}
