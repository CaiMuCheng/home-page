import React from 'react';
import ReactDOM from 'react-dom/client';

String.prototype.trimMargin = function(joinText = '\n') {
	return this.split('\n')
		.map((value, index) => {
			return value.trim();
		})
		.join(joinText);
}

class Card extends React.Component {
	
	render() {
		const props = this.props;
		const style = props.style;
		let description = props.description;
		
		if(description != null) {
			description = description.trimMargin();
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