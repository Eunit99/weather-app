import React, {
	useState,
	useEffect
} from 'react';
import WeatherInformation from '../components/weatherRenderingComponents/WeatherInformation'
import { api } from '../components/weatherJSComponents/api';

const WeatherApp = () => {
	const [isLoading, setLoading] = useState(false); // Initialize loading of weather widget to true;
	const [searchQuery, setSearchQuery] = useState("Nigeria");
	const today = new Date();



	// Get the data from the API
	const getData = (searchQuery = "Nigeria") => { // searchQuery is the search input
		// This getData function will only run once
		fetch(`${api.base}weather?q=${searchQuery}&units=metric&APPID=${api.key}`)
		// fetch('../components/weatherJSComponents/fakeData.js')
			.then(res => {
				res.json()
				.then(data => {
					console.log(`The returned data is: ${data}`); //data returned from the fetch
					console.log(`The returned stringify data is: ${JSON.stringify(data)}`); //data returned from the fetch
					var eunit = data;
					return data;
				})
			})
			.then(setLoading(false)) //call setLoading to false so as to display the widget
			// .then(displayResult) //call displayResult function
			// .catch(setLoading(true)) //call setLoading to true so as to display the widget
			.catch(err => {
				console.error(`${err}! Error fetching from ${api.base}`) //error occurred!
			})
	}
	useEffect(() => {
		getData();
	}, []);	// this will run once because of the empty array

	const onClickHandler = (e) => {
		onChangeHandler(e);
		setSearchQuery(e.target.value);
		console.log(`searchQuery: ${searchQuery}`);
	}

	const handleEnterKey = (e) => {
		if (e.key === "Enter") {
			setSearchQuery(e.target.value);
			console.log(`searchQuery: ${searchQuery}`);
			e.preventDefault();
		}
	}

	const onChangeHandler = (e) => {
		{
			setSearchQuery(e.target.value);
			console.log(`searchQuery: ${searchQuery}`);
			e.preventDefault();
		}
	}

	const data = eunit;

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
			<WeatherInformation
				isWidgetLoading={isLoading}
				handleEnterKey={handleEnterKey}
				onChangeHandler={onChangeHandler}
				onClickHandler={onClickHandler}
				searchQuery={searchQuery}
				data={data}
			/>
		</div>
	);
}

export default WeatherApp;