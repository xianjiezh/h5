import React from 'react';
import {Button} from 'antd-mobile';
import {withRouter} from 'react-router-dom';

const VideoList = (props)=>{
	return (
		<div>
			<Button onClick={()=>{props.history.push('/video/1')}}>第一期视频</Button>
			<Button onClick={()=>{props.history.push('/video/2')}} disabled>第二期视频</Button>
			{/*<Button onClick={()=>{props.history.push('/video/3')}}>第三期视频</Button>*/}
			{/*<Button onClick={()=>{props.history.push('/video/4')}}>第四期视频</Button>*/}
		</div>
	);
};


export default withRouter(VideoList);
