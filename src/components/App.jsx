import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
import { MoviesPage } from './pages/MoviesPage/MoviesPage';
import { MovieDetails } from './pages/MovieDetails/MovieDetails';
import { ActorDetails } from './pages/ActorDetails/ActorDetails';
import { MOVIE_LISTS, TOP_LIST } from '../constants';
import { MoviesListTop } from './pages/MoviesListTop/MoviesListTop';
import { MoviesListMain } from './pages/MoviesListMain/MoviesListMain';

export const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <MoviesPage />,
        },
        ...TOP_LIST.map(el => ({
          path: el.url,
          element: <MoviesListTop />,
        })),
        ...MOVIE_LISTS.map(el => ({
          path: el.url,
          element: <MoviesListMain />,
        })),
        {
          path: '/movie/:id',
          element: <MovieDetails />,
        },
        {
          path: '/actor/:id',
          element: <ActorDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
