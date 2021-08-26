import React, { Component } from 'react';
import api from '../components/weatherJSComponents/api';
import SearchInput from '../components/weatherRenderingComponents/SearchInput'
import WeatherInformation from '../components/weatherRenderingComponents/WeatherInformation'

class WeatherApp extends Component {
	render() {
		return (
			<div className="card">
				{/* Search input */}
				<SearchInput />
				{/* WeatherInformation */}
				<WeatherInformation />
			</div>
		);
	}
}

export default WeatherApp;