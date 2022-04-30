import React, { useContext } from 'react';
import Data from '../assets/data.json';
import { MovieContext } from "../context/MovieContext";

const searchImageByTitle = (titre) => {
    const test = Data.find((d) => d.title == titre);
    if (test) {
        return test.image
    }else{
        return "./spider-man-3.jpg"
    }
   };

const Fond = () => {

    const { movieCtx } = useContext(MovieContext);
    
    return (
        <div  className="corps">
            <img className="fond" src={searchImageByTitle(movieCtx)} alt={movieCtx}/>
        </div>
    );
};

export default Fond;