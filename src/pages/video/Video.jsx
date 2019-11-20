import React from 'react';
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css"; // import css

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
		</div>
	);
};


export default Video;
