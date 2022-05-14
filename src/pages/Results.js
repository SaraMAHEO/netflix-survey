import React, { useContext } from 'react';
import Header from "../components/Navigation";
import { UserContext } from "../context/UserContext";
import { ScoreContext } from "../context/ScoreContext";
import Logo from '../components/Logo';
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

const Results = () => {
    const { user } = useContext(UserContext);
    const { array, setArray } = useContext(ScoreContext);
    let currentMovie = "";
    let totalScore = 0;

    return (
        <div className="container">
            <Header />
            <div className="content">
                <Logo />
                <div className="results">
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
                    <h2>Votre score total sur les quizz réalisés : {totalScore}/{array.length}</h2>
                </div>
            </div>
        </div >
    );
};

export default Results;