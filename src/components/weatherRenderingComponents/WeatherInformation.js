import React, { Component } from 'react';
import LoadingWidget from './LoadingWidget';
import LoadingWeather from './LoadedWeather';

class WeatherInformation extends Component {
	// This load weather widget depending if weather widget is loading or not
	render() {
		const isWidgetLoading = this.props.isWidgetLoading;
		console.log(isWidgetLoading);
		return (
			<div>
				{isWidgetLoading?
					<LoadingWidget /> : <LoadingWeather />
				}
			</div>
		);
	}
}

export default WeatherInformation;