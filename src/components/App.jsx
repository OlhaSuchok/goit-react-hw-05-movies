import { Route, Routes } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import Header from '../pages/Header/Header';
import Home from '../pages/Home/Home';
import Movie from '../pages/Movie/Movie';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Cast from '../pages/Cast/Cast';
import Reviews from '../pages/Reviews/Reviews';
import NotFound from 'pages/NotFound/NotFound';

export const App = () => {
  return (
    <Box p={20}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/movies/:movieId/cast" elements={<Cast />} />
          <Route path="/movies/:movieId/reviews" elements={<Reviews />} />
          <Route path="*" elements={<Home />} />
        </Route>
      </Routes>
    </Box>
  );
};
