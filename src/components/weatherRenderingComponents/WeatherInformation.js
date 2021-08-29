import React, { Component } from 'react';
import LoadingWidget from './LoadingWidget';
import LoadedWeather from './LoadedWeather';

class WeatherInformation extends Component {
	// This load weather widget depending if weather widget is loading or not
	render() {
		const isWidgetLoading = this.props.isWidgetLoading;
		console.log(`isWidgetLoading? ${isWidgetLoading}`);
		return (
			<div>
				{isWidgetLoading?
					<LoadingWidget /> : <LoadedWeather />
				}
			</div>
		);
	}
}

export default WeatherInformation;