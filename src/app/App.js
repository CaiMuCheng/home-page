import '../css/App.css'
import backgroundImage from '../img/background.jpg';
import Card from '../component/Card';
import AppMainCard from './AppMainCard';

function App() {
	return (
		<div
			id="background-image"
			style={{
				background: `url(${backgroundImage})`,
				backgroundSize: "cover",
				backgroundPosition: "80% 0px"
			}}>
			
			<Card description={`
				此为居中的卡片:
				宽高自适应,
				top & left & bottom & right
				各 0px & margin auto 为水平 + 垂直居中
			`} style={{
				width: "75%",
				height: "80%",
				position: "absolute",
				top: "0px",
				left: "0px",
				bottom: "0px",
				right: "0px",
				margin: "auto",
				overflow: "auto"
			}}>
			<AppMainCard />
			</Card>
			<div id="toastBar"/>
			<Card zIndex="1440" style={{
				display: "flex",
				position: 'absolute',
				bottom: '0px',
				width: "100%",
				height: "25px",
				borderRadius: "0px",
				alignItems: "center",
				justifyContent: "center"
			}}>
				<p style={{
					fontSize: "12px",
					color: "#ededed",
					fontFamily: "Ubuntu"
				}}>Copyright © 2022 苏沐橙 & Made by SuMuCheng</p>
			</Card>
		</div>
	)
}

export default App;