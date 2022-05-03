import React, { useContext } from 'react';
import Header from "../components/Navigation";
import Logo from "../components/Logo";
import Fond from "../components/Fond";
import Question from "../components/Question";
import { MovieContext } from "../context/MovieContext";

const Quizz = () => {
    const { movieCtx } = useContext(MovieContext);

    return (
        <div>
            <Fond />
            <div className="container">
                <Header />
                <div className="content">
                    <Logo />
                    <pre className='titleQuizz'>{movieCtx}</pre>
                    <Question />
                </div>
            </div >
        </div>
    );
};

export default Quizz;