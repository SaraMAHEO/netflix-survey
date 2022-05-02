import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from "../context/MovieContext";
import Question from './Question';

const base_url = "https://image.tmdb.org/t/p/original/";

const Card = ({ movie }) => {
  let navigate = useNavigate();
  const { movieCtx, setMovieCtx } = useContext(MovieContext);

    return (
        <li className="card" 
        onClick={() => {  
          setMovieCtx(movie.title);        
          navigate("/quizz");
      }} >
            <img
                src={`${base_url}${
                  movie.poster_path
                }`}
                alt={movie.title}                             
              />
        </li>
    );
};

export default Card;