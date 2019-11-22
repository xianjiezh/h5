import React from 'react';
import {quizQuestions1, quizAnswer1} from '../../api/quizQuestions1';
import Quiz from '../../component/quiz/Quiz';
import Result from '../../component/quiz/Result';
import './style.css';
import { getUserAnswer } from '../../api/utils';

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
			questionId: 1,
			question: '',
			answerOptions: [],
			answer: '',
			answersCount: {},
			result: ''
		};

		this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
	}

	componentDidMount() {
		const shuffledAnswerOptions = quizQuestions1.map(question =>
			this.shuffleArray(question.answers)
		);
		this.setState({
			question: quizQuestions1[0].question,
			answerOptions: shuffledAnswerOptions[0]
		});
	}

	shuffleArray(array) {
		var currentIndex = array.length,
			temporaryValue,
			randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	handleAnswerSelected(event) {
		this.setUserAnswer(event.currentTarget.value);

		if (this.state.questionId < quizQuestions1.length) {
			setTimeout(() => this.setNextQuestion(), 300);
		} else {
			setTimeout(() => this.setResults(this.getResults()), 300);
		}
	}

	setUserAnswer(answer) {
		this.setState((state) => ({
			answersCount: {
				...state.answersCount,
				[answer]: (state.answersCount[answer] || 0) + 1
			},
			answer: answer
		}));
	}

	setNextQuestion() {
		const counter = this.state.counter + 1;
		const questionId = this.state.questionId + 1;

		this.setState({
			counter: counter,
			questionId: questionId,
			question: quizQuestions1[counter].question,
			answerOptions: quizQuestions1[counter].answers,
			answer: ''
		});
	}

	getResults() {
		const answersCount = this.state.answersCount;
		const answersCountKeys = Object.keys(answersCount);
		const answersCountValues = answersCountKeys.map(key => answersCount[key]);
		const maxAnswerCount = Math.max.apply(null, answersCountValues);

		return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
	}

	setResults() {
		const answersCount = getUserAnswer(this.state.answersCount);
		// 获取正确率
		const right = this.computedRight(answersCount, quizAnswer1);
		// const result = [...this.state.result]
		// if (result.length === 1) {
		// 	this.setState({ result: result[0] });
		// } else {
		// 	this.setState({ result: 'Undetermined' });
		// }
		this.setState({result: [...right, this.props.match.params.id]})
	}

	computedRight = (userAnswer, answer)=>{
		const questionCount = answer.length;
		let count = 0;
		userAnswer.forEach((number, i)=>{
			if(answer[i] === number){
				count += 1;
			}
		});
		return [count, questionCount]
	};

	renderQuiz() {
		return (
			<Quiz
				answer={this.state.answer}
				answerOptions={this.state.answerOptions}
				questionId={this.state.questionId}
				question={this.state.question}
				questionTotal={quizQuestions1.length}
				onAnswerSelected={this.handleAnswerSelected}
			/>
		);
	}

	renderResult() {
		return <Result quizResult={this.state.result} />;
	}



	render() {
		return (
			<div>
				{this.state.result ? this.renderResult() : this.renderQuiz()}
			</div>
		);
	}
}


export default Form;
