import React, { Component } from 'react';
import { Player, BigPlayButton, ControlBar } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import {Button, Modal} from 'antd-mobile';
import {withRouter} from 'react-router-dom';

import './video.css'

const alert = Modal.alert;

let timer = null

class Video extends Component {
	constructor(props) {
		super(props)
		this.player = null
		this.haveShowWatchVedioOverModal = false;
	}
	state = {
		videoPlaying: true,
    hasStarted: false,
    paused: false,
	}

	componentDidMount() {
		this.poolVideoState()
	}

	componentWillUnmount() {
		window.clearInterval(timer)
	}

	showAlert = () => {
    this.haveShowWatchVedioOverModal = true;
    
    this.toAnswer();
    // 是否已经看了第一次
    localStorage.setItem('haveWatchOne', true);
		// const alertInstance = alert('信息', '视频已经看完, 请回答相应问题', [
		// 	{
		// 		text: '好的',
		// 		onPress: () => {
		// 		},
		// 	style: 'default' },
		// ]);
	};

	poolVideoState = () => {
    // 轮询查看是否播放状态
    // 第一次
    const hasStarted = this.player.getState().player.hasStarted
    this.setState({
      hasStarted,
    })
		timer = setInterval(() => {
      const ended = this.player.getState().player.ended
      const paused = this.player.getState().player.paused
			const hasStarted = this.player.getState().player.hasStarted
			if (this.state.hasStarted !== hasStarted) {
				this.setState({
					hasStarted,
				})
      }
      if (this.state.paused !== paused) {
				this.setState({
					paused,
				})
      }
			if (ended) {
				!this.haveShowWatchVedioOverModal && this.showAlert();
			}
		}, 1000)
	}

	toAnswer = () => {
		const id = this.props.match.params.id
		this.props.history.push(`/form/${id}`)
	}
	render() {

    const id = this.props.match.params.id
		const { videoPlaying, paused } = this.state;

		const computedVideoUrl = () =>{
			return require(`./${id}.mp4`)
		};

		const computedPicUrl = () => {
			return require(`./${id}.jpg`)
		}

		return (
			<div className="video-wrapper">
				{/* 加载动画 ？ */}
				{ !videoPlaying && <img className="loading-pic" src={require(`./${id}.jpeg`)} alt="loading"/> }
				{ videoPlaying && <Player
					ref={(player) => {this.player = player}}
					playsInline
					poster={computedPicUrl()}
					style={{ display: 'inline' }}
					src={computedVideoUrl()}
          isFullscreen={true}
          autoPlay={true}
          fluid
          width={document.body.clientWidth}

				>
					{/* <ControlBar className="my-class" />	 */}
					<BigPlayButton position="center" />
				</Player>}
				{(localStorage.getItem('haveWatchOne') && (!this.state.hasStarted || paused)) && <div className="to-answer"><span onClick={this.toAnswer}>我已经看完, 现在开始答题</span></div> }
			</div>
		);
	}

};

export default withRouter(Video)
;
