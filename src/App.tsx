import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import GamePage from './pages/GamePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children: [
      {
        path: "/game",
        element: <GamePage></GamePage>,
      },
      {
        path: "/admin",
        element: <AdminPage></AdminPage>,
      },
    ],
  },

]);

///Сделать роутер главная, потом роутер на айдиИгры-старница игры,

const App: React.FC = () => {
  return (
      <div className="App h-screen">
        <RouterProvider router={router}/>
      </div>
  );
}

export default App;
