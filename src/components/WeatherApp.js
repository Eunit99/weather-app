import React, {
	useState,
	useEffect
} from 'react';
import WeatherInformation from '../components/weatherRenderingComponents/WeatherInformation'
import { api } from '../components/weatherJSComponents/api';
import { fakeData } from '../components/weatherJSComponents/fakeData';

const WeatherApp = () => {
	const [isLoading, setLoading] = useState(false); // Initialize loading of weather widget to true;
	const [fetchData, setFetchData] = useState(fakeData); // Initialize fetchData with fakeData;
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
					// console.log(`The returned data is: ${data}`); //data returned from the fetch
					// console.log(`The returned stringify data is: ${JSON.stringify(data)}`); //data returned from the fetch
					setFetchData(data);
					return data;
				})
			})
			.then(setLoading(false)) //call setLoading to false so as to display the widget
			// .then(displayResult) //call displayResult function
			// .catch(setLoading(true)) //call setLoading to true so as to display the widget
			.catch(err => {
				console.error(`${err}! Error fetching from ${api.base}`) //error occurred!
			});
	}

	useEffect((data) => {
		getData();
	}, []);	// this will run once because of the empty array

	const onClickHandler = (e, searchValue) => {
		setSearchQuery(e.target.value);
		setFetchData(searchValue);
		e.preventDefault();
	}

	const handleEnterKey = (e, searchValue) => {
		if (e.key === "Enter") {
			setSearchQuery(e.target.value);
			setFetchData(searchValue);
			e.preventDefault();
		}
	}

	const onChangeHandler = (e, searchQuery) => {
		var searchValue = e.target.value;
		console.log(`SearchValue is ${searchValue}`)
		{
			setSearchQuery(e.target.value);
			setFetchData(searchQuery);
			e.preventDefault();
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
			<p className="date-container">{dateFunction(today)} </p>
			<WeatherInformation
				isWidgetLoading={isLoading}
				handleEnterKey={handleEnterKey}
				onChangeHandler={onChangeHandler}
				onClickHandler={onClickHandler}
				searchQuery={searchQuery}
				fetchData={fetchData}
			/>
		</div>
	);
}

export default WeatherApp;