import React, { Component } from 'react';
import { Modal } from 'antd-mobile'
import './prizeWheel.css'
import { from } from 'rxjs';

class PrizeWheel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			prizeLevel: 0
		}
	}

	componentDidMount() {
		this.initPrizeWheel()
	}

	initPrizeWheel = () => {
		const callJsToStarto = () => {
			// 这里	去后台拿中奖数据
			let prizeLevel = 2
			callFlashToRollo(prizeLevel);
			// 结果是否存在 localstorage 中
			localStorage.prizeLevel = prizeLevel
			this.setState({
				prizeLevel
			})
			
		}
		//开发获得抽奖结果 通知flash开始播放效果 js->flash
		function callFlashToRollo(id) {
			console.log(111, id)
			if (SWFOBJo) SWFOBJo.stopRoll(id);
		}
		//3、flash动画完成通知js  flash->js
		const callJsToCompleteo = () => {
			SWFOBJo.enable()
			Modal.alert('恭喜中奖', `您抽中了${this.state.prizeLevel}等奖，请去填写收货资料吧`, [
				{ text: '取消', onPress: () => console.log('cancel'), style: 'default' },
				{ text: '确定', onPress: () => this.props.history.push('/info') },
			])
		}
		var SWFOBJo = new window.Lottery({
			'r':4,//奖品总数
			'width':360,//flash宽度
			'height':360,//flash高度
			's':'http://ossweb-img.qq.com/images/flash/lottery/circle/z.png',//开始抽奖按钮图片
			'bx':0,//圆盘的图片位置x坐标 （转盘的中心点坐标为（0,0））
			'by':0,//圆盘的图片位置y坐标
			'sx':-20,//开始抽奖按钮x坐标
			'sy': 120,//开始抽奖按钮y坐标
			'contentId' : 'swfcontent',//嵌入swf 的div层的 id 
			'onClickRollEvent' : callJsToStarto,//对应上面接口
			'onCompleteRollEvent':callJsToCompleteo //对应上面接口
		});
	}

	render() {
		const props = this.props
		const id = props.match.params.id;
		return (
			<div>
				{`PrizeWheel 抽第 ${id} 期的奖品`}
				<div className="lottery" id="swfcontent">
					{/* 需要一个抽奖内容的图片 */}
					<img style={{display: 'none'}} src="http://ossweb-img.qq.com/images/js/delottery/g.png" alt="转盘" />
				</div>
			</div>
		);
		}
	
};



export default PrizeWheel;
