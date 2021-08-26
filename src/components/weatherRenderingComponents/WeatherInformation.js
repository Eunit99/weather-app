import React, { Component } from 'react';

class WeatherInformation extends Component {
	render() {
		return (
			<div>
				<div className="weather notLoading loading">
					<h2 className="city">Weather in Denver</h2>
					<h1 className="temp">51°C</h1>
					<div className="flex">
						<img src="https://openweathermap.org/img/wn/04n.png" alt="" className="icon" />
						<div className="description">Cloudy</div>
					</div>
					<div className="humidity">Humidity: 60%</div>
					<div className="wind">Wind speed: 6.2 km/h</div>
				</div>
			</div>
		);
	}
}

export default WeatherInformation;