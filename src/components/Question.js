import React, { useState, useContext, useEffect } from 'react';
import Data from '../assets/question.json';
import { MovieContext } from "../context/MovieContext";
import { ScoreContext } from '../context/ScoreContext';
import { NavLink } from 'react-router-dom';

const Question = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const { movieCtx } = useContext(MovieContext);
	const { array, setArray } = useContext(ScoreContext);
	const questions = Data[movieCtx];

	const handleAnswerOptionClick = (isCorrect) => {
		const iQst = currentQuestion + 1;
		if(array.filter(function(e) { return e.idMovie === movieCtx && e.idQst === iQst; }).length > 0) {
			const index = array.findIndex((e) => {
				return e.idMovie === movieCtx && e.idQst === iQst;
			})
			array[index].scoreQst = Number(isCorrect);
			setArray([...array]);
		} else {
			const qst = {idMovie:movieCtx, idQst:iQst, scoreQst:Number(isCorrect)};
			setArray([...array, qst]);
		}
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

	if (questions === undefined) {
		return (
			<div className='error-question'>
				<h2>Il n'y a pas de question disponible</h2>
				<button className="retour-accueil">
					<NavLink to="/">
						Retour à la page d'accueil
                    </NavLink>
				</button>
			</div>
		)
	} else {
		return (
			<div className='app'>
				{showScore ? (
					<div className='score-section'>
						<h1>Résultat du quizz !</h1>
						<h2>Vous avez marqué {score} point(s) sur {questions.length}</h2>
						<button className="retour-accueil">
							<NavLink to="/">
								Retour à la page d'accueil
                    		</NavLink>
						</button>
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
							{questions[currentQuestion].answers.map((answerOption, index) => (
								<button key={index} onClick={() => handleAnswerOptionClick(answerOption.is_right)}>{answerOption.answer}</button>
							))}
						</div>
					</>
				)}
			</div>
		);
	}
};

export default Question;