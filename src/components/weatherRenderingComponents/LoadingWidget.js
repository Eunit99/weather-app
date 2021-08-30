import React, { Component } from 'react';

class LoadingWidget extends Component {
	render() {

		const errorMessage = this.props.errorMessage;

		// console.log(`isWidgetLoading? ${isWidgetLoading}`)
		return (
			<div className="weather">
				<p className="mb-3">
					{errorMessage}
				</p>
				<div className="flex">
					<h1 className="detail">Error!</h1>
				</div>
			</div>
		);
	}
}

export default LoadingWidget;