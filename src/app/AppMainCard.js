import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from '../component/Card'; // 引入卡片组件

import avatar from "../img/avatar.png"

function AppMainCard() {
	// 首先为头像
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "fit-content",
				position: "absolute",
				left: "0px",
				right: "0px",
				margin: "auto",
				padding: "15px"
			}}>
			<img width="65px" height="65px" src={avatar} style={{
				borderRadius: "100%",
				marginTop: "25px"
			}}/>
			<p style={{
				fontFamily: "Ubuntu",
				marginTop: "25px",
				marginBottom: "15px",
				fontSize: "16px",
				color: '#b5b5b5',
			}}>永恒，乃万物归终，于寂灭前。</p>
			<p style={{
				fontFamily: "Ubuntu",
				lineHeight: "0px",
				alignSelf: "flex-end",
				color: '#cdcdcd',
				fontSize: "17px"
			}}>—— 《往念·永恒释》</p>
		</div>
	)
}

export default AppMainCard;