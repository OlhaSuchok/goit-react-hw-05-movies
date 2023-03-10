import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchListPopularFilms } from 'services/Api';
import {
  HomeTitle,
  HomeList,
  HomeListItem,
  NavLinkPopularFilms,
  HomeWrapper,
} from 'pages/Home/Home.styled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function Home() {
  const [popularFilms, setFilms] = useState([]);
  // eslint-disable-next-line
  const [status, setStatus] = useState(Status.IDLE);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  const location = useLocation();

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
        setError(console.log(error));
      }
    };
    getFilms();
  }, []);

  return (
    <HomeWrapper>
      <HomeTitle>TRENDING TODAY</HomeTitle>
      {popularFilms.length > 0 && (
        <HomeList>
          {popularFilms.map(({ title, id }) => {
            return (
              <HomeListItem key={id}>
                <NavLinkPopularFilms
                  to={`/movies/${id}`}
                  state={{ from: location }}
                >
                  {title}
                </NavLinkPopularFilms>
              </HomeListItem>
            );
          })}
        </HomeList>
      )}
    </HomeWrapper>
  );
}
