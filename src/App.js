import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Quizz from './pages/Quizz';
import { UserContext } from "./context/UserContext";
import Login from './pages/Login';
import { MovieContext } from './context/MovieContext';

const App = () => {
  const [user, setUser] = useState(null);
  const [movieCtx, setMovieCtx] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser])
  const valueMovie = useMemo(() => ({ movieCtx, setMovieCtx }), [movieCtx, setMovieCtx])

  return (
    <BrowserRouter>
      <UserContext.Provider value={value}>
        <MovieContext.Provider value={valueMovie}>
        {
          user ? (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Home />} />
              <Route path="/quizz" element={<Quizz />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="*" element={<Login />} />
            </Routes>
          )
        }
        </MovieContext.Provider>
      </UserContext.Provider>
    </BrowserRouter >
  );
};

export default App;
