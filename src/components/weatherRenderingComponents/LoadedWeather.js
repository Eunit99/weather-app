import React, { Component } from 'react';
import SearchInput from './SearchInput'
import { fakeData } from '../';
// import { api } from '../components/weatherJSComponents/api';

class LoadingWeather extends Component {
	render() {
		console.log(fakeData)
		return (
			<div>
				{/* Search input */}
				<SearchInput />

				{fakeData.map((data, key) => {
					return (
						<div className="weather" key={key}>
							<h2 className="city">Weather in Denver</h2>
							<h1 className="temp">51°C</h1>
							<div className="flex">
								<img src="https://openweathermap.org/img/wn/04n.png" alt="" className="icon" />
								<div className="description">Cloudy</div>
							</div>
							<div className="humidity">Humidity: 60%</div>
							<div className="wind">Wind speed: 6.2 km/h</div>
						</div>
					)
				})}
			</div>
		);
	}
}

export default LoadingWeather;