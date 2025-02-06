import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Main Page</div>,
    },
    {
      path: '/movies',
      element: <div>Movies</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
