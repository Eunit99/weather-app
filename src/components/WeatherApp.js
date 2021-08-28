import React, {
	useState,
	useEffect
} from 'react';
import WeatherInformation from '../components/weatherRenderingComponents/WeatherInformation'
import { api } from '../components/weatherJSComponents/api';
import { fakeData } from '../components/weatherJSComponents/fakeData';
import query from './weatherRenderingComponents/SearchInput'

const WeatherApp = () => {
	const [isLoading, setLoading] = useState(true); // Initialize loading of weather widget to true;

	const getData = () => {
		console.log(`UseEffect ran`);
		fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
			.then(res => {
				res.json();
			})
			.catch(err => {
				console.error(`${err}! Error fetching from ${api.base}`) //error occurred!
					.catch(setLoading(true))
			})
			.then(setLoading(false)) //call setLoading(true)
			// .then(displayResult); //call displayResult function
	}
	useEffect(() => {
		getData();
	}, []);	// this will run once because of the empty array


	return (
		<div className="card">
			{/* WeatherInformation */}
			<WeatherInformation isWidgetLoading={isLoading} />
		</div>
	);
}

export default WeatherApp;