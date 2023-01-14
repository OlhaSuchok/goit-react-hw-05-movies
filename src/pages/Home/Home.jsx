import { useState, useEffect } from 'react';
import { fetchListPopularFilms } from 'services/Api';
import {
  HomeTitle,
  HomeList,
  HomeListItem,
  NavLinkPopularFilms,
} from 'pages/Home/Home.styled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function Home() {
  const [popularFilms, setFilms] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFilms = async () => {
      setStatus(Status.PENDING);
      try {
        const {
          data: { results },
        } = await fetchListPopularFilms();

        setFilms(results);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        setError(error);
      }
    };
    getFilms();
  }, []);

  return (
    <>
      <HomeTitle>TRENDING TODAY</HomeTitle>
      {popularFilms.length > 0 && (
        <HomeList>
          {popularFilms.map(({ title, id }) => {
            return (
              <HomeListItem key={id}>
                <NavLinkPopularFilms to={`/movies/${id}`}>
                  {title}
                </NavLinkPopularFilms>
              </HomeListItem>
            );
          })}
        </HomeList>
      )}
    </>
  );
}
