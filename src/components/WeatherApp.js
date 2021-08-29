import React, {
	useState,
	useEffect
} from 'react';
import WeatherInformation from '../components/weatherRenderingComponents/WeatherInformation'
import { api } from '../components/weatherJSComponents/api';
import { fakeData } from '../components/weatherJSComponents/fakeData';
import searchQuery from './weatherRenderingComponents/SearchInput'

const WeatherApp = () => {
	const [isLoading, setLoading] = useState(false); // Initialize loading of weather widget to true;
	const today = new Date();

	// Get the data from the API
	const getData = (searchQuery) => { // searchQuery is the search input
		// This getData function will only run once
		fetch(`${api.base}weather?q=${searchQuery}&units=metric&APPID=${api.key}`)
			.then(res => {
				res.json();
			}).then(data=> {
				console.log(data); //data returned from the fetch
			})
			.then(setLoading(false)) //call setLoading to false so as to display the widget
			// .then(displayResult) //call displayResult function
			.catch(err => {
				console.error(`${err}! Error fetching from ${api.base}`) //error occurred!
					.catch(setLoading(true)); //call setLoading to true so as to display the widget
			})
	}
	useEffect(() => {
		// getData();
	}, []);	// this will run once because of the empty array



	function dateFunction(today) {
		let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
		let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

		let day = days[today.getDay()];
		let date = today.getDate();
		let month = months[today.getMonth()];
		let year = today.getFullYear();

		return `${day} ${date} ${month} ${year}`;
	}

	return (
		<div className="card">
			{/* WeatherInformation */}
			<p className="date-container">{dateFunction(today)} </p>
			<WeatherInformation isWidgetLoading={isLoading} />
		</div>
	);
}

export default WeatherApp;