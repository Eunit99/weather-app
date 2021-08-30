import React, { Component } from 'react';

class LoadingWidget extends Component {
	render() {

		const isWidgetLoading = this.props.isWidgetLoading;

		console.log(`isWidgetLoading? ${isWidgetLoading}`)
		return (
			<div className="weather">
				<p className="mb-3">
					Oops! Seems there exist no city with that name. Kindly refresh this page and input the correct city.
				</p>
				<div className="flex">
					<h1 className="detail">Error!</h1>
				</div>
			</div>
		);
	}
}

export default LoadingWidget;