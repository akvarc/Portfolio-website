import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import { Toaster } from './Component/ui/toaster';
import Home from './Pages/Home';

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