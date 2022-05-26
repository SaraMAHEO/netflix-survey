import React, { useContext } from 'react';
import Header from "../components/Navigation";
import { ScoreContext } from "../context/ScoreContext";
import Logo from '../components/Logo';
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

const Results = () => {
    const { array } = useContext(ScoreContext);
    let currentMovie = "";
    let currentMovieScore = "";
    let totalScore = 0;
    let percentScore = 0;

    const props = {
        percent: percentScore,
        colorSlice: "#E50914",
        colorCircle: "white",
        fontColor: "#E50914",
        fontSize: "1.6rem",
        size: 170,
        strokeBottom: 5,
        speed: 60,
        unit: "%",
    };

    if (array.length < 5) {
        return (
            <div className="results">
                <h2>Vous n'avez fini aucun quizz</h2>
            </div>
        )
    } else {
        return (
            <div className="results">
                <div>
                    {array.map(function (answer) {
                        totalScore = totalScore + answer.scoreQst
                        if (answer.idMovie !== currentMovie) {
                            currentMovie = answer.idMovie;
                            return answer.scoreQst > 0 ?
                                <>
                                    <h2>{currentMovie}</h2>
                                    <div className="answer">
                                        <span>Question {answer.idQst}</span>
                                        <FiThumbsUp className="item fiThumbsUp" />
                                    </div>
                                </>
                                :
                                <>
                                    <h2>{currentMovie}</h2>
                                    <div className="answer">
                                        <span>Question {answer.idQst}</span>
                                        <FiThumbsDown className="item fiThumbsDown" />
                                    </div>
                                </>
                        } else {
                            return answer.scoreQst > 0 ?
                                <>
                                    <div className="answer">
                                        <span>Question {answer.idQst}</span>
                                        <FiThumbsUp className="item fiThumbsUp" />
                                    </div>
                                </>
                                :
                                <>
                                    <div className="answer">
                                        <span>Question {answer.idQst}</span>
                                        <FiThumbsDown className="item fiThumbsDown" />
                                    </div>
                                </>
                        }
                    })}
                </div>
                <div className="line"></div>
                <div className="percent">
                    {array.map(function (answer) {
                        if (answer.idMovie !== currentMovieScore) {
                            currentMovieScore = answer.idMovie;
                            percentScore = answer.scoreQst;
                            return (
                                <>
                                    <h2>Votre score sur le quizz {currentMovieScore} :</h2>
                                </>
                            )
                        } else if (answer.idQst === 5) {
                            percentScore = percentScore + answer.scoreQst;
                            return (
                                <>
                                    <CircularProgressBar {...{
                                        percent: percentScore * 20,
                                        colorSlice: "#E50914",
                                        colorCircle: "white",
                                        fontColor: "#E50914",
                                        fontSize: "1.6rem",
                                        size: 170,
                                        strokeBottom: 5,
                                        speed: 60,
                                        unit: "%",
                                    }} />
                                </>
                            )
                        } else {
                            percentScore = percentScore + answer.scoreQst;
                        }
                    })}
                    <h2>Votre score total sur les quizz réalisés :</h2>
                    <CircularProgressBar {
                        ...{
                            percent: (totalScore / array.length) * 100,
                            colorSlice: "#E50914",
                            colorCircle: "white",
                            fontColor: "#E50914",
                            fontSize: "1.6rem",
                            size: 170,
                            strokeBottom: 5,
                            speed: 60,
                            unit: "%",
                        }
                    } />
                </div>
            </div>
        );
    }
};

export default Results;