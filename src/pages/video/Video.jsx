import React from 'react';
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css"; // import css

const Video = (props)=>{
	const {match} = props.match.params.id;
	return (
		<div>
			{match}
			<Player
				playsInline
				poster="/assets/poster.png"
				src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
			/>
		</div>
	);
};


export default Video;
