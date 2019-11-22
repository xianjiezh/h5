import React from 'react';

const PrizeWheel = (props)=>{
	console.log(props);
	const id = props.match.params.id;
	return (
		<div>
			{`PrizeWheel 抽第 ${id} 期的奖品`}
		</div>
	);
};



export default PrizeWheel;
