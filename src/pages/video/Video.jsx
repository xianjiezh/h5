import React, { Component } from 'react';
import { Player, BigPlayButton, ControlBar } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import {Button} from 'antd-mobile';
import {withRouter} from 'react-router-dom';

import './video.css'

let timer = null

class Video extends Component {
	constructor(props) {
		super(props)
		this.player = null
	}
	state = {
		videoPlaying: true,
		hasStarted: false
	}

	componentDidMount() {
		this.poolVideoState()
	}

	componentWillUnmount() {
		window.clearInterval(timer)
	}

	poolVideoState = () => {
		// 轮询查看是否播放状态
		timer = setInterval(() => {
			const ended = this.player.getState().player.ended
			const hasStarted = this.player.getState().player.hasStarted
			if (this.state.hasStarted !== hasStarted) {
				this.setState({
					hasStarted,
				})
			}
			console.log('ended', ended)
			console.log('this.player.getState().player', this.player.getState().player)
			if (ended) {
				this.toAnswer();
				// 是否已经看了第一次
				localStorage.setItem('haveWatchOne', true);
			}
		}, 1000)
	}

	toAnswer = () => {
		const id = this.props.match.params.id
		this.props.history.push(`/form/${id}`)
	}
	render() {
		const { videoPlaying } = this.state;

		const computedVideoUrl = () =>{
			return `https://healenh5.oss-cn-hangzhou.aliyuncs.com/2018/pahr/index/video/bef4.mp4`;
		};

		const computedPicUrl = () => {
			return `https://healenh5.oss-cn-hangzhou.aliyuncs.com/2019/pahrv2/index/loadImage/loadbg.jpg?v=10`
		}

		return (
			<div className="video-wrapper">
				{/* 加载动画 ？ */}
				{ !videoPlaying && <img className="loading-pic" src="https://healenh5.oss-cn-hangzhou.aliyuncs.com/2019/pahrv2/index/loadImage/loadbg.jpg?v=10" alt="loading"/> }
				{ videoPlaying && <Player
					ref={(player) => {this.player = player}}
					playsInline
					poster={computedPicUrl()}
					style={{ display: 'inline' }}
					src={computedVideoUrl()}
					isFullscreen={true}

				>
					{/* <ControlBar className="my-class" />	 */}
					<BigPlayButton position="center" />
				</Player>}
				{ localStorage.getItem('haveWatchOne') && !this.state.hasStarted && <div className="to-answer"><span onClick={this.toAnswer}>我已经看完, 现在开始答题</span></div> }
			</div>
		);
	}

};

export default withRouter(Video)
;
