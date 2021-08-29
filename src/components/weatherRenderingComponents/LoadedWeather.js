import React, { Component } from 'react';
import SearchInput from './SearchInput'
import { fakeData } from '../weatherJSComponents/fakeData';

class LoadedWeather extends Component {
	render() {
		const {
			country,
			state,
			city,
			weatherDetails: {
				temperature,
				humidity,
				condition,
				windSpeed,
				weatherIcon
			}
		} = fakeData;

		console.log(country);
		return (

			<div>
				{/* Search input */}
				<SearchInput />
				<div className="weather" >

					<h2 className="city">Weather in {country}</h2>
					<h1 className="temp">{temperature}°C</h1>
					<div className="flex">
						<img src={weatherIcon} alt="" className="icon" />
						<div className="description">{condition}</div>
					</div>
					<div className="humidity">Humidity: {humidity}</div>
					<div className="wind">Wind speed: {windSpeed} km/h</div>
				</div>
			</div>
		);
	}
}

export default LoadedWeather;