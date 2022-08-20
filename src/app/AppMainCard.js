import Card from '../component/Card'; // 引入卡片组件
import '../css/BaseCard.css';

import avatar from "../img/avatar.png";
import works from "../img/works.svg";
import blog from "../img/blog.svg";
import aboutMe from "../img/aboutMe.svg";
import contactMe from "../img/contactMe.svg";

function BaseCard(props) {
	const width = props.width ? props.width : "140px";
	const height = props.height ? props.height : "70px";
	const onClick = props.onClick;
	return <Card
			className="BaseCard"
			onClick={onClick}
			style={{
				width: width,
				height: height,
				border: "1px solid white",
				padding: "10px"
		    }}>
				{props.children}
			</Card>
}

function TextCard(props) {
	const title = props.title;
	const message = props.message
	let element = null;
	
	const lineTexts = message.split('\\n');
	const lastIndex = lineTexts.length - 1;
	const insertedMessageElement = lineTexts.map((value, index) => {
		if(index < lastIndex) {
			return <p key={index}>{value}<br/></p>
		}
		return value;
	});
	
	if(title != null) {
		const titleLineTexts = title.split('\\n');
		const lastIndex = titleLineTexts.length - 1;
		const insertedTitleElement = lineTexts.map((value, index) => {
			if(index < lastIndex) {
				return <p key={index}>{value}<br/></p>
			}
			return value;
		});
		
		element = (
			<BaseCard width={props.width} height={props.height}>
				<p style={{
					color: '#cdcdcd',
					fontSize: "17px",
					fontFamily: "Ubuntu",
					textOverflow: 'ellipsis',
					overflow: "hidden",
					padding: "0px",
					margin: "0px"
				}}>{insertedTitleElement}</p>
				<p style={{
					fontFamily: "Ubuntu",
					fontSize: "16px",
					color: '#b5b5b5',
					textOverflow: 'ellipsis',
					overflow: "hidden",
					padding: "0px",
					margin: "0px",
					marginTop: "5px"
				}}>{insertedMessageElement}</p>
			</BaseCard>
		)
	} else {
		element = (
			<BaseCard>
				<p style={{
					fontFamily: "Ubuntu",
					fontSize: "16px",
					color: '#b5b5b5',
					textOverflow: 'ellipsis',
					overflow: "hidden",
					padding: "0px",
					margin: "0px",
					marginTop: "5px"
				}}>{insertedMessageElement}</p>
			</BaseCard>
		)
	}
	return element
}

function ClickableCard(props) {
	const icon = props.icon;
	const title = props.title;
	const href = props.href;
	const onClick = props.onClick;
	const marginBottom = props.marginBottom ? props.marginBottom : "0px";
	
	return (
		<a href={href} target="_blank" style={{
			marginLeft: "15px",
			marginRight: "15px",
			marginTop: "15px",
			marginBottom: marginBottom,
			textDecoration: "none"
		}}>
		<BaseCard onClick={onClick} width={props.width} height={props.height}>
			<div style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "row",
				height: "100%"
			}}>
				<div
					style={{
						alignItems: "center"
					}}>
					<img 
					src={icon}
					alt=""
					style={{
						width: "34px",
						height: "34px"
					}}/>
				</div>
				<span style={{
					textOverflow: 'ellipsis',
					overflow: "hidden",
					fontSize: "17px",
					marginLeft: "10px",
					color: "#efefef"
				}}>{title}</span>
			</div>
		</BaseCard>
		</a>
	);
}

function AppMainCard() {
	// 首先为头像
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				position: "absolute",
				left: "0px",
				right: "0px",
				margin: "15px"
			}}>
			<img width="65px" height="65px" src={avatar} style={{
				borderRadius: "100%",
				marginTop: "25px"
			}}/>
			<div style={{
				display: "flex",
				flexDirection: "column"
			}}>
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
			<div style={{
				width: "fit-content",
				display: 'flex',
				marginTop: "25px",
				flexDirection: "row",
				justifyContent: "center",
				flexWrap: "wrap"
			}}>
				<ClickableCard
					icon={works}
					href="https://github.com/CaiMuCheng"
					title="作品" />
				
				<ClickableCard 
					icon={blog}
					href="https://caimucheng.github.io"
					title="博客" />
					
				<ClickableCard
					icon={aboutMe}
					title="关于我"
					onClick={() => {
						alert(`
						Hi, I'm SuMuCheng!
						是初中生,
						一只 Kotlin/Java 的 Android 开发者
						喜欢开发 APP, 做一些自己喜欢的事情
						开发个人主页的目的是为了让大家更好的了解我
						`.trimMargin());
					}}/>
					
				<ClickableCard
					icon={contactMe}
					marginBottom="15px"
					title="联系我"
					onClick={() => {
						alert(`
						QQ: 3578557729
						Email: 3578557729@qq.com
						Github: https://github.com/CaiMuCheng
						`.trimMargin())
					}}/>
					
			</div>
		</div>
	)
}

export default AppMainCard;