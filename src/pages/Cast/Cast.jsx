import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCasts } from 'services/Api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function Cast() {
  const [cast, setCast] = useState([]);
  // eslint-disable-next-line
  const [status, setStatus] = useState(Status.IDLE);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    setStatus(Status.PENDING);

    const getFilmDetails = async () => {
      try {
        const {
          data: { cast },
        } = await fetchCasts(movieId);
        setStatus(Status.RESOLVED);
        setCast(cast);
      } catch {
        setStatus(Status.REJECTED);
        setError(console.log(error));
      }
    };
    getFilmDetails();
  }, [error, movieId]);

  return (
    <div>
      {cast && (
        <ul>
          {cast.map(({ profile_path, id, character, name, original_name }) => {
            return (
              <li key={id}>
                <img src={imageUrl + profile_path} alt={name}></img>
                <p>Name: {original_name}</p>
                <p>Сharacter: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
      {!cast && <p>We don't have ant casts for this movie.</p>}
    </div>
  );
}
