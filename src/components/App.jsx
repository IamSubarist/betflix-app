import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
import { MoviesPage } from './pages/MoviesPage/MoviesPage';
import { MovieDetails } from './pages/MovieDetails/MovieDetails';
import { ActorDetails } from './pages/ActorDetails/ActorDetails';

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
