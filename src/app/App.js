import '../css/App.css'
import backgroundImage from '../img/background.jpg';
import Card from '../component/Card'

function App() {
	
	return (
		<div
			id="background-image"
			style={{
				background: `url(${backgroundImage})`,
				backgroundSize: "cover",
			}}>
			
			<Card description={`
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
				padding: "20px",
				margin: "auto"
			}}>
			I am a card
			</Card>
		</div>
	)
}

export default App;