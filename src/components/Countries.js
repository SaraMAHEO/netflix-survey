import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([])
    const [rangeValue, setRangeValue] = useState(10);
    const [selectedRadio, setSelectedRadio] = useState("")
    const radios = {
        "Action" : 28,
        "Comédie" : 35,
        "Horreur" : 27,
        "Romance" : 10749,
    }; 

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=62e9afa9b26ec1658e4f7c572663a19b&langage=fr-FR")
            .then((res) => res.json())
            .then((res) => setData(res["results"]))
    }, [])

    console.log(data)

    return (
        <div className="countries">
            <ul className="radio-container">
                <input
                    type="range"
                    min="1"
                    max="20"
                    defaultValue={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)}
                />
                {Object.entries(radios).map(([key, value]) => (
                    <li>
                        <input
                            type="radio"
                            id={value} name="GenreRadio"
                            checked={value === selectedRadio}
                            onChange={(e) => setSelectedRadio(e.target.id)} />
                        <label htmlFor={value}>{key}</label>
                    </li>
                ))}
            </ul>
            {selectedRadio && <button onClick={() => setSelectedRadio(null)}>Annuler la recherche</button>}
            <ul>
                {
                    selectedRadio ? (
                        data
                            .filter((movie) => movie.genre_ids.includes(parseInt(selectedRadio)))
                            .sort((a, b) => b.popularity - a.popularity)
                            .slice(0, rangeValue)
                            .map((movie, index) => (
                                <Card key={index} movie={movie} />
                            ))
                    ) : (
                        data
                            .sort((a, b) => b.popularity - a.popularity)
                            .slice(0, rangeValue)
                            .map((movie, index) => (
                                <Card key={index} movie={movie} />
                            ))
                    )                       
                }
            </ul>
        </div >
    );
};

export default Countries;