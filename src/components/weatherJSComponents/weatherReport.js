const api = {
	key: "15e8ccf77de4ed3c5ed2ed76785e0766",
	base: "https://api.openweathermap.org/data/2.5/"


}

const searchBox = document.querySelector('.search-box')
searchBox.addEventListener('keypress', setQuery)

function setQuery(evt) {
	if (evt.keyCode == 13) {
		getResults(searchBox.value)
		console.log(searchBox.value)
	}
}


function getResults(query) {
	fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
		//    fetch(  `{api.openweathermap.org/data/2.5/}weather?q=${query}&appid=${api.key}` ) 
		.then(weather => {
			return weather.json()
		}).then(displayResults)
}

function displayResults(weather) {
	console.log(weather)
	let city = document.querySelector('.location .city')
	city.innerHTML = `${weather.name}, ${weather.sys.country}`

	let now = new Date()
	let date = document.querySelector('.location .date')
	date.innerHTML = dateBuilder(now)
	let temp = document.querySelector('.current .temp')
	temp.innerHTML = `${Math.round(weather.main.temp)}<sup>o</sup>C`
	let weather_el = document.querySelector('.current .weather')
	weather_el.innerHTML = weather.weather[0].main
}


function dateBuilder(d) {

	let months = ['january', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novermber', 'December'];
	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

	let day = days[d.getDay()]
	let date = d.getDate()
	let month = months[d.getMonth()]
	let year = d.getFullYear()
	return `${day} ${date} ${month} ${year}`

}