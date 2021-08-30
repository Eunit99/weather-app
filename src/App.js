import './App.css';
import WeatherApp from '../src/components/WeatherApp'

function App() {
	const d = new Date(),
	year = d.getFullYear();
  return (
		<div>
			<WeatherApp />
			<div className="copyright">
				Copyright &copy; {year} Weathie by <a className="link" href="http://eunit.me" alt="Eunit" target="_blank">Eunit</a>
			</div>
		</div>
  );
}

export default App;
