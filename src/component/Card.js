import React from 'react';
import ReactDOM from 'react-dom/client';

class Card extends React.Component {
	
	render() {
		const props = this.props;
		const style = props.style;
		let description = props.description;
		
		if(description != null) {
			description = description
				.split('\n')
				.map((value, index) => {
					return value.trim();
				})
				.join('\n');
		}
		
		return (
			<div
				id="card"
				style={style}
				description={description}>
			{props.children}
			</div>
		)
	}
	
}

export default Card;