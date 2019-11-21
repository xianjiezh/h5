import { List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

import React from 'react';

const Info = (props)=>{
	const {getFieldProps} = props.form;
	return (
		<div>
			<List renderHeader={() => 'Show clear'}>
				<InputItem
					{...getFieldProps('inputclear')}
					clear
					placeholder="displayed clear while typing"
				>标题</InputItem>
			</List>
		</div>
	);
};

const InfoWrapper = createForm()(Info);


export default InfoWrapper;
