import React, { Component } from 'react';
import { Player, BigPlayButton, ControlBar } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import {Button} from 'antd-mobile';
import {withRouter} from 'react-router-dom';

import './video.css'

class Video extends Component {
	constructor(props) {
		super(props)
		this.player = null
	}
	state = {
		videoPlaying: true
	}

	toAnswer = () => {
		const ended = this.player.getState().player.ended
		if (!localStorage.finishedWatch) {
			return 
		}
		return 
		// const id = this.props.match.params.id
		// this.props.history.push(`/form/${id}`)
	}
	render() {
		const { videoPlaying } = this.state;

		const computedVideoUrl = () =>{
			return `https://healenh5.oss-cn-hangzhou.aliyuncs.com/2018/pahr/index/video/bef4.mp4`;
		};

		return (
			<div className="video-wrapper">
				{/* 加载动画 ？ */}
				{ !videoPlaying && <img className="loading-pic" src="https://healenh5.oss-cn-hangzhou.aliyuncs.com/2019/pahrv2/index/loadImage/loadbg.jpg?v=10" alt="loading"/> }
				{ videoPlaying && <Player
					ref={(player) => {this.player = player}}
					playsInline
					poster="https://healenh5.oss-cn-hangzhou.aliyuncs.com/2019/pahrv2/index/loadImage/loadbg.jpg?v=10"
					style={{ display: 'inline' }}
					src={computedVideoUrl()}
					isFullscreen={true}
					
				> 
					{/* <ControlBar className="my-class" />	 */}
					<BigPlayButton position="center" />
				</Player>}
				<span className="to-answer" onClick={this.toAnswer}>我已经看完, 现在开始答题</span>
			</div>
		);
	}
	
};

export default withRouter(Video)
;
