import { List, InputItem, Button, Modal } from 'antd-mobile';
import { createForm } from 'rc-form';

import React, { Component } from 'react';

import './info.css'
class Info extends Component {
	submit = () => {
		this.props.form.validateFields((error, value) => {
			console.log(error, value);
			if (error) {
				Modal.alert('请检查输入的值')
			} else {
				console.log('value', value)
			}
    })
	}
	render() {
		const {getFieldProps, getFieldError} = this.props.form;
		let errors
		return (
			<div className="info">
				<List renderHeader={() => '填写个人资料'}>
					<InputItem
						{...getFieldProps('name', {
							rules: [{
								required: true,
								message: '请输入姓名'
							}]
						})}
						clear
						placeholder="请输入"
					>姓名</InputItem>
					<div className="error">{(errors = getFieldError('name')) ? errors.join(',') : null}</div>
					<InputItem
						{...getFieldProps('phone', {
							rules: [{
								required: true,
								message: '请输入联系方式'
							}]
						})}
						clear
						placeholder="请输入"
					>联系方式</InputItem>					
					<div className="error">{(errors = getFieldError('phone')) ? errors.join(',') : null}</div>
					<InputItem
						{...getFieldProps('address', {
							rules: [{
								required: true,
								message: '请输入收货地址'
							}]
						})}
						clear
						placeholder="请输入"
					>收货地址</InputItem>
					<div className="error">{(errors = getFieldError('address')) ? errors.join(',') : null}</div>
					<Button onClick={this.submit} style={{margin: '0 auto', marginTop: '40px', width: '80%'}}>确认无误，现在提交</Button>
				</List>
			</div>
		);
	}
	
};

const InfoWrapper = createForm()(Info);


export default InfoWrapper;
