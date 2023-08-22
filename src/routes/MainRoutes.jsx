import {Routes, Route} from 'react-router-dom';
import {MovieList, MovieDetails, PageNotFound, Search} from '../pages/index.js';

const MainRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="movie/popular" element={<MovieList />} />
            <Route path="movie/top" element={<MovieList />} />
            <Route path="movie/upcoming" element={<MovieList />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  )
}

export default MainRoutes