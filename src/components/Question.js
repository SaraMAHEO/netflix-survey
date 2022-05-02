import React, { useState, useContext} from 'react';
import Data from '../assets/question.json';
import { MovieContext } from "../context/MovieContext";
import { ScoreContext } from '../context/ScoreContext';

const Question = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const { movieCtx, setMovieCtx } = useContext(MovieContext);
	const { scoreCtx, setScoreCtx } = useContext(ScoreContext);
    const questions = Data[movieCtx];

	console.log(scoreCtx)

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
                    <h1>Résultat du quizz !</h1>
					<h2>Vous avez marqué {score} point(s) sur {questions.length}</h2>
					{() => setScoreCtx(String(Number(scoreCtx)+score))}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>
                            <span>{questions[currentQuestion].question}</span>
                        </div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answers.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.is_right)}>{answerOption.answer}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Question;