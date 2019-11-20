import React from 'react';
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import {Button} from 'antd-mobile';
import {withRouter} from 'react-router-dom';


const Video = (props)=>{
	const id = props.match.params.id;

	const computedVideoUrl = ()=>{
		return `/${id}.mov`;
	};

	return (
		<div>
			<Player
				playsInline
				poster="/assets/poster.png"
				src={computedVideoUrl()}
			/>
			<Button onClick={()=>{props.history.push(`/form/${id}`)}}>我已经看完, 现在开始答题</Button>
		</div>
	);
};

export default withRouter(Video)
;
