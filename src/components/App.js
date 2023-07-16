import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from './MoviDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

function App() {
  return (
    <Routes>
      <Route path="/goit-react-hw-05-movies" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="Movies" element={<Movies />}></Route>
        <Route path="Movies/:MoviesID" element={<MovieDetails />}>
          <Route path="Cast" element={<Cast />} />
          <Route path="Review" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
