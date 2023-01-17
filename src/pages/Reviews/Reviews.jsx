import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/Api';
import {
  ReviewsList,
  ReviewsItem,
  ReviewsText,
  ReviewsAuthor,
  ReviewsValue,
  ReviewsContent,
} from './Reviews.styled';

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
        <ReviewsList>
          {reviews.map(({ author, id, content }) => {
            return (
              <ReviewsItem key={id}>
                <ReviewsText>
                  <ReviewsAuthor>Author: </ReviewsAuthor>
                  <ReviewsValue>{author}</ReviewsValue>
                </ReviewsText>
                <ReviewsContent>{content}</ReviewsContent>
              </ReviewsItem>
            );
          })}
        </ReviewsList>
      )}
      {reviews.length === 0 && <p>We don't have ant reviews for this movie.</p>}
    </div>
  );
}
