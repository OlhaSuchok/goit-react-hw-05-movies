import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/Api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function Reviews() {
  const [reviews, setReview] = useState([]);
  // eslint-disable-next-line
  const [status, setStatus] = useState(Status.IDLE);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    setStatus(Status.PENDING);

    const getFilmDetails = async () => {
      try {
        const {
          data: { results },
        } = await fetchReviews(movieId);
        setStatus(Status.RESOLVED);
        setReview(results);
      } catch {
        setStatus(Status.REJECTED);
        setError(console.log(error));
      }
    };
    getFilmDetails();
  }, [error, movieId]);

  return (
    <div>
      {reviews && (
        <ul>
          {reviews.map(({ author, id, content }) => {
            return (
              <li key={id}>
                <p>AUTHOR: {author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {reviews.length === 0 && <p>We don't have ant reviews for this movie.</p>}
    </div>
  );
}
