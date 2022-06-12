import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from "../context/MovieContext";


const base_url = "https://image.tmdb.org/t/p/original/";

const Card = (props) => {
  let navigate = useNavigate();
  const { setMovieCtx } = useContext(MovieContext);

    return (
        <li className="card" 
        onClick={() => {  
          setMovieCtx(props.movie.title);        
          navigate("/quizz");
      }} >
            <img
                src={`${base_url}${
                  props.movie.poster_path
                }`}
                alt={props.movie.title}                             
              />
        </li>
    );
};

export default Card;