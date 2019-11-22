import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import {Button} from 'antd-mobile';

function Result (props) {
	const userRight = +props.quizResult[0];
	const questionTotalCount = +props.quizResult[1];
	const renderAllAnswerRight =()=>{
		return (
			<div>
				<Button>参加抽奖</Button>
			</div>
		)
	};
	const renderSomeAnswerRight =()=>{
		return (
			<div>
				{`您答对了: ${userRight}, 答错${questionTotalCount - userRight}`}
				<Button>重新观看视频</Button>
			</div>
		)
	};
	return (
		<CSSTransition
			className="container result"
			component="div"
			transitionName="fade"
			transitionEnterTimeout={800}
			transitionLeaveTimeout={500}
			transitionAppear
			transitionAppearTimeout={500}
		>
			<div>
				{props.quizResult[0] === props.quizResult[1] ? renderAllAnswerRight() : renderSomeAnswerRight()}
			</div>
		</CSSTransition>
	);
}

Result.propTypes = {
	quizResult: PropTypes.string.isRequired,
};

export default Result;
