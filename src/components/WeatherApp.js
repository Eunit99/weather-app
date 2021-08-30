import React, {
	useState,
	useEffect
} from 'react';
import WeatherInformation from '../components/weatherRenderingComponents/WeatherInformation'
import {
	api
} from '../components/weatherJSComponents/api';
import {
	fakeData
} from '../components/weatherJSComponents/fakeData';

const WeatherApp = () => {
	const [isWidgetLoading, setLoading] = useState(false), // Initialize loading of weather widget to true;
		[fetchData, setFetchData] = useState(fakeData), // Initialize fetchData with fakeData;
		[searchQuery, setSearchQuery] = useState("Lagos"),
		[errorMessage, setErrorMessage] = useState("Error!"),
		today = new Date();


	// Get the data from the API
	const getData = (searchQuery) => { // searchQuery is the search input
		// This getData function will only run once
		fetch(`${api.base}weather?q=${searchQuery}&units=metric&APPID=${api.key}`)
			// fetch('../components/weatherJSComponents/fakeData.js')
			.then(res => {
				if (res.status === 400) {
					console.error(`400 Bad request! Error fetching from ${api.base}! Undefined query.`);
					setErrorMessage("Oops! The server could not understand the request due to invalid syntax. Kindly refresh this page and input the correct query.");
					setLoading(true); //call setLoading to true so as not to display the widget
				} else if (res.status === 404) {
					console.error(`404 Not found! Error fetching from ${api.base}! Undefined query.`);
					setErrorMessage("Oops! Seems there exist no city with that name. Kindly refresh this page and input the correct query.");
					setLoading(true); //call setLoading to true so as not to display the widget
				} else if (res.status === 200){
					res.json()
						.then(data => {
							// console.log(`The returned data is: ${data}`); //data returned from the fetch
							// console.log(`The returned stringify data is: ${JSON.stringify(data)}`); //data returned from the fetch
							setFetchData(data);
							return data;
						})
						.then(setLoading(false)) //call setLoading to false so as to display the widget
				}
			})
			.catch(err => {
				console.error(`${err}! Unknown error occurred while trying to fetch from ${api.base}`) //error occurred!
				setErrorMessage("Oops! An error occurred while trying to process your request. Kindly refresh this page and try again.");
				setLoading(true); //call setLoading to true so as not to display the widget
				// console.log(`isWidgetLoading? ${isWidgetLoading}`)
			});
	}

	useEffect(() => {
		getData(searchQuery);
	}, []); // this will run once because of the empty array immediately user visit page

	// Events functions

	const onChangeHandler = (e) => {
		const searchQueryValue = e.target.value;
		setSearchQuery(searchQueryValue);
		// console.log(`onChangeHandler value: ${searchQueryValue}`)
	}

	const onClickHandler = () => {
		setSearchQuery(searchQuery);
		getData(searchQuery);
		// console.log(`onClickHandler value: ${searchQuery}`)
	}

	const handleEnterKey = (e) => {
		if (e.key === "Enter") {
			setSearchQuery(searchQuery);
			getData(searchQuery);
			// console.log(`handleEnterKey value: ${searchQuery}`)
		}
	}


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

			{/* Hide the date if isWidgetLoading is true */}

			{{ isWidgetLoading } ? "" : <p className="date-container">{dateFunction(today)} </p>}

			<WeatherInformation
				isWidgetLoading={isWidgetLoading}
				onChangeHandler={onChangeHandler}
				onClickHandler={onClickHandler}
				handleEnterKey={handleEnterKey}
				searchQuery={searchQuery}
				fetchData={fetchData}
				errorMessage={errorMessage}
			/>
		</div>
	);
}

export default WeatherApp;