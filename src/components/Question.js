import React, { useState, useContext, useEffect } from 'react';
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
	let iQst =0;

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			iQst++;
			setScore(score + 1);
			const qst = {idMovie:movieCtx, idQst:iQst, scoreQst:1};
			setScoreCtx([...scoreCtx, qst]);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
		console.log(scoreCtx);
	};

	if (questions === undefined) {
		return (
			<div className='error-question'>
				<h2>Il n'y a pas de question disponible</h2>
			</div>
		)
	} else {
		return (
			<div className='app'>
				{showScore ? (
					<div className='score-section'>
						<h1>Résultat du quizz !</h1>
						<h2>Vous avez marqué {score} point(s) sur {questions.length}</h2>
						{() => setScoreCtx(scoreCtx + score)}
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
	}
};

export default Question;