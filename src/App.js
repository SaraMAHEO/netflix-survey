import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Quizz from './pages/Quizz';
import Profile from './pages/Profile';
import { UserContext } from "./context/UserContext";
import Login from './pages/Login';
import { MovieContext } from './context/MovieContext';
import { ScoreContext } from './context/ScoreContext';
import Header from './components/Header';

const App = () => {
  const [user, setUser] = useState(null);
  const [movieCtx, setMovieCtx] = useState(null);
  const [scoreCtx, setScoreCtx] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser])
  const valueMovie = useMemo(() => ({ movieCtx, setMovieCtx }), [movieCtx, setMovieCtx])
  const valueScore = useMemo(() => ({ scoreCtx, setScoreCtx }), [scoreCtx, setScoreCtx])

  return (
    <BrowserRouter>
      <UserContext.Provider value={value}>
        <MovieContext.Provider value={valueMovie}>
          <ScoreContext.Provider value={valueScore}>
            {
              user ? (
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<Home />} />
                  <Route path="/quizz" element={<Quizz />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              ) : (
                <Routes>
                  <Route path="*" element={<Login />} />
                </Routes>
              )
            }
          </ScoreContext.Provider>
        </MovieContext.Provider>
      </UserContext.Provider>
    </BrowserRouter >
  );
};

export default App;
