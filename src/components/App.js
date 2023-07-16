import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('./MoviDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/Movies" element={<Movies />}></Route>
        <Route path="Movies/:MoviesID" element={<MovieDetails />}>
          <Route path="Cast" element={<Cast />} />
          <Route path="Review" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
