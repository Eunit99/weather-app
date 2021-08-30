import React, { Component } from 'react';
import LoadingWidget from './LoadingWidget';
import LoadedWeather from './LoadedWeather';

class WeatherInformation extends Component {
	// This load weather widget depending if weather widget is loading or not
	render() {
		const isWidgetLoading = this.props.isWidgetLoading;
		// console.log(`isWidgetLoading? ${isWidgetLoading}`);
		return (
			<div>
				{isWidgetLoading?
					<LoadingWidget
						isWidgetLoading={this.props.isWidgetLoading}
						errorMessage={this.props.errorMessage}

					/>
					:
					<LoadedWeather
						handleEnterKey={this.props.handleEnterKey}
						onClickHandler={this.props.onClickHandler}
						onChangeHandler={this.props.onChangeHandler}
						searchQuery={this.props.searchQuery}
						data={this.props.data}
						fetchData={this.props.fetchData}
						errorMessage={this.props.errorMessage}

						/>
				}
			</div>
		);
	}
}

export default WeatherInformation;