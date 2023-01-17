import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
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
  NavLinks,
  MovieTextDetailsWrapper,
  MovieImageWrapper,
  MovieAdditionalWrapper,
  MovieDetailsWrapper,
  GoBackButtonWrapper,
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
    navigate(location.state?.from ?? '/');
  };

  const { poster_path, title, vote_average, overview, genres } = filmDetails;
  const moviegGenres = genres?.map(elem => ' ' + elem.name).join();

  return (
    <MovieDetailsWrapper>
      <MovieImageWrapper>
        <GoBackButtonWrapper>
          <GoBackButton type="button" onClick={onClickHandler}>
            <HiArrowLeft />
          </GoBackButton>
          <MovieDetailsTitle>{title}</MovieDetailsTitle>
        </GoBackButtonWrapper>
        {poster_path && (
          <MovieImg src={imageUrl + poster_path} alt={title}></MovieImg>
        )}
      </MovieImageWrapper>
      <MovieTextDetailsWrapper>
        <MovieTextDetails>
          <DetailName>User score: </DetailName>
          <DetailValue>{vote_average}</DetailValue>
        </MovieTextDetails>
        <MovieTextDetails>
          <DetailName>Overview: </DetailName>
          <DetailValue>{overview}</DetailValue>
        </MovieTextDetails>
        {genres && (
          <MovieTextDetails>
            <DetailName>Gernes: </DetailName>
            <DetailValue>{moviegGenres}</DetailValue>
          </MovieTextDetails>
        )}
      </MovieTextDetailsWrapper>
      <MovieAdditionalWrapper>
        <MovieAdditionalItile>Additional information</MovieAdditionalItile>
        <ul>
          <NavLinkItem>
            <NavLinks to="cast" state={{ from: location.state.from }}>
              Cast
            </NavLinks>
          </NavLinkItem>
          <NavLinkItem>
            <NavLinks to="reviews" state={{ from: location.state.from }}>
              Review
            </NavLinks>
          </NavLinkItem>
        </ul>
      </MovieAdditionalWrapper>
      <Outlet />
    </MovieDetailsWrapper>
  );
}
