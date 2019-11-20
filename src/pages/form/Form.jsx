import React from 'react';

const Form = (props)=>{
	const {match} = props;
	console.log(props);
	const id = match.params.id;
	return (
		<div>
			Form: {id}
		</div>
	);
};


export default Form;
