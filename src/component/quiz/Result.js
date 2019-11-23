import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import {Button, Modal} from 'antd-mobile';
import {withRouter} from 'react-router-dom';

const alert = Modal.alert;

function Result (props) {
	const userRight = +props.quizResult[0];
	const questionTotalCount = +props.quizResult[1];
	const id = +props.quizResult[2];

	const goToVideo = ()=>{
		props.history.push(`/video/${id}`)
	};

	const renderAllAnswerRight =()=>{
		const alertInstance = alert('恭喜', '您已经成功答对所有问题, 点击确定抽奖', [
			{
				text: '确定',
				onPress: () => {
					props.history.push(`/prizeWheel/${id}`);
				},
				style: 'default'
			},
		]);
	};
	const renderSomeAnswerRight =()=>{
		return (
			<div>
				{`您答对了: ${userRight}, 答错${questionTotalCount - userRight}`}
				<Button onClick={goToVideo}>重新观看视频</Button>
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

export default withRouter(Result);
