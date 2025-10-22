import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Toaster } from './Component/ui/toaster';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const App = () => {
  return <>
  
  <RouterProvider router={router} /> 
  <Toaster/>
  </>;
};

export default App;