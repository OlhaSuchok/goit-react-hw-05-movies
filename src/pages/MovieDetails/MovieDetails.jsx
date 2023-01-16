import { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchFilmById } from 'services/Api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function MovieDetails() {
  const [filmDetails, setFilmDetails] = useState([]);
  // eslint-disable-next-line
  const [status, setStatus] = useState(Status.IDLE);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';

  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    setStatus(Status.PENDING);

    const getFilmDetails = async () => {
      try {
        const { data } = await fetchFilmById(movieId);
        setStatus(Status.RESOLVED);
        setFilmDetails(data);
      } catch {
        setStatus(Status.REJECTED);
        setError(console.log(error));
      }
    };
    getFilmDetails();
  }, [error, movieId]);

  const onClickHandler = () => {
    navigate(location?.state.from.pathname ?? '/');
  };

  const { poster_path, title, vote_average, overview, genres } = filmDetails;
  const moviegGenres = genres?.map(elem => ' ' + elem.name).join();

  return (
    <div>
      <button type="button" onClick={onClickHandler}>
        Go Back
      </button>
      <h1>{title}</h1>
      <img src={imageUrl + poster_path} alt={title}></img>
      <p>User score: {vote_average}</p>
      <p>Overview: {overview}</p>
      {genres && <p>Gernes: {moviegGenres} </p>}

      {/* {genres &&
        genres.map(({ name }) => {
          return <p>Gernes: {name} </p>;
        })} */}

      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Review</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
