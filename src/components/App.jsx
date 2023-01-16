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
          <Route index element={<Home />}></Route>
          <Route path="/movies" element={<Movie />}></Route>
          <Route path="/movies/:movieId" elements={<MovieDetails />}></Route>
          <Route path="/movies/:movieId/cast" elements={<Cast />}></Route>
          <Route path="/movies/:movieId/reviews" elements={<Reviews />}></Route>
          <Route path="*" elements={<NotFound />}></Route>
        </Route>
      </Routes>
    </Box>
  );
};
