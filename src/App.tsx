import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css'

import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
