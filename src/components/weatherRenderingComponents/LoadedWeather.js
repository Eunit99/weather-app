import React, { Component } from 'react';
import SearchInput from './SearchInput'
import { fakeData } from '../weatherJSComponents/fakeData';

class LoadedWeather extends Component {
	render() {
		const {
			name: location,
			sys: {
				country
			},
			main: {
				temp: temperature,
				humidity
			},
			weather: [{
				icon: weatherIcon,
				main: condition
			}],
			wind: {
				speed: windSpeed
			}
		} = fakeData;

		return (
			<div>
				{/* Search input */}
				<SearchInput />
				<div className="weather" >

					{/* Weather in Mountain View, US */}
					<h2 className="city">
						<svg stroke="currentColor" fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
						</svg>
					{location}, {country} </h2>
					{/* 51°C */}
					<h1 className="temp">{Math.round(temperature)}°C</h1>
					<div className="flex">
						{/* https://openweathermap.org/img/wn/04n.png */}
						<img src={`http://openweathermap.org/img/w/${weatherIcon}`} alt="icon" className="icon" />
						{/* Cloudy */}
						<div className="description">{condition}</div>
					</div>
					{/* Humidity: Cloudy */}
					<div className="humidity">Humidity: {humidity}</div>
					<div className="wind">Wind speed: {windSpeed} km/h</div>
				</div>
			</div>
		);
	}
}

export default LoadedWeather;