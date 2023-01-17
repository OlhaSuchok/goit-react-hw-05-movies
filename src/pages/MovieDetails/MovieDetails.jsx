import { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
// import { MdArrowBackIosNew } from 'react-icons/md';
import { HiArrowLeft } from 'react-icons/hi';
import { fetchFilmById } from 'services/Api';
import {
  GoBackButton,
  MovieDetailsTitle,
  MovieImg,
  DetailName,
  DetailValue,
  MovieTextDetails,
  MovieAdditionalItile,
  NavLinkItem,
  MovieTextDetailsWrapper,
  MovieImageWrapper,
  MovieAdditionalWrapper,
  MovieDetailsWrapper,
} from './MovieDetails.styled';

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
    <MovieDetailsWrapper>
      <GoBackButton type="button" onClick={onClickHandler}>
        <HiArrowLeft />
      </GoBackButton>
      <MovieImageWrapper>
        <MovieDetailsTitle>{title}</MovieDetailsTitle>
        <MovieImg src={imageUrl + poster_path} alt={title}></MovieImg>
      </MovieImageWrapper>
      <MovieTextDetailsWrapper>
        <MovieTextDetails>
          <DetailName>User score:</DetailName>{' '}
          <DetailValue>{vote_average}</DetailValue>
        </MovieTextDetails>
        <MovieTextDetails>
          <DetailName>Overview:</DetailName>{' '}
          <DetailValue>{overview}</DetailValue>
        </MovieTextDetails>
        {genres && (
          <MovieTextDetails>
            <DetailName>Gernes:</DetailName>{' '}
            <DetailValue>{moviegGenres}</DetailValue>
          </MovieTextDetails>
        )}
      </MovieTextDetailsWrapper>
      <MovieAdditionalWrapper>
        <MovieAdditionalItile>Additional information</MovieAdditionalItile>
        <ul>
          <NavLinkItem>
            <NavLink to="cast">Cast</NavLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink to="reviews">Review</NavLink>
          </NavLinkItem>
        </ul>
      </MovieAdditionalWrapper>
      <Outlet />
    </MovieDetailsWrapper>
  );
}
