import React, {
	useState,
	useEffect
} from 'react';
import WeatherInformation from '../components/weatherRenderingComponents/WeatherInformation'
import { api } from '../components/weatherJSComponents/api';
import query from './weatherRenderingComponents/SearchInput'

const WeatherApp = () => {
	const [isLoading, setLoading] = useState(false); // Initialize loading of weather widget to true;
	useEffect(() => {
		console.log(`UseEffect ran`);
		fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
			.then(res => {
				res.json();
			})
			.then(setLoading(true)) //call setLoading(true)
			// .then(displayResult); //call displayResult function
	}, []);	// this will run once because of the empty array


	return (
		<div className="card">
			{/* WeatherInformation */}
			<WeatherInformation isWidgetLoading={isLoading} />
		</div>
	);
}

export default WeatherApp;