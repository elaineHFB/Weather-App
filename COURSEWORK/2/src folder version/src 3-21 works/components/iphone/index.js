// import preact
import { h, render, Component } from 'preact';
// import jquery for API calls
import $ from 'jquery';
// import stylesheets for ipad & button
import style from './style';



import Widget from '../widgets/widget';
import HeaderWidget from '../widgets/headerWidget';
import Dwidget from '../widgets/daily_widget';
import HWidget from '../widgets/hourly_widget';
import SearchWidget from '../searchWidget/searchWidget';





export default class Iphone extends Component { // An iphone Component

	// a constructor with initial set states 
		// Removed the props because this.props is not needed in the constructor
	constructor(){
		super()
		this.state = {
			location: "Amsterdam",
		}
		this.fetchAllData()		//Removes the need for a button to display weather
	}

	



	render = () => {
		// display all weather data
		if(this.state.currentWeatherData && this.state.hourlyWeatherData && this.state.dailyWeatherData){ // If the currentWeatherData has been initialized, only then render the screen
			const gustVisible = this.state.currentWeatherData['wind']['gust'] ? null : style.invisible; // If there is no wind gust, hide the element that would contain it
			return ( 
				<div class={ style.iphone }>
	
					<header>
						<HeaderWidget 
							location = {this.state.location} 
							conditions = {this.state.currentWeatherData['weather']['0']['description']} 	// A description of the current weather conditions aka "light rain" or "overcast clouds"
							icons = {this.state.currentWeatherData['weather']['0']['icon']} // need icon
							temperature = {Math.round(this.state.currentWeatherData['main']['temp'])}
						/>
					</header>
	
					{/* Units are added here so the data is left "clean" */}
					<div class = {`${style.body}`}>
						{/* Humidity in % */}
						<div class={ style.smallWidget }>
							<Widget 
								factor = "Humidity" 
								measure = {this.state.currentWeatherData['main']['humidity'] + "%"} 
								class = "humidityWidget"
							/>
						</div>
						
						{/* Wind Speed in Meters/Second (Metric), converted to MPH */}
						<div class={ style.smallWidget }>
							<Widget 
								factor = "Wind Speed" 
								measure = {(this.state.currentWeatherData['wind']['speed'] * 2.237).toFixed(2) + " mph"} 
								class = "windSpeedWidget"
							/>
						</div>
	
						{/* Wind Direction in degrees */}
						<div class={ style.smallWidget }>
							<Widget 
								factor = "Wind Direction" 
								measure = {this.state.currentWeatherData['wind']['deg']}  
								class = "windDirectionWidget"
								degreeSymbol = "°"
							/>
						</div>
	
						{/* Wind Gust (burst of wind) in Meters/Second (Metric), converted to MPH */}
						<div class={ `${gustVisible} ${style.smallWidget}` }>
							<Widget 
								factor = "Gusts" 
								measure = {(this.state.currentWeatherData['wind']['gust'] * 2.237).toFixed(2) + " mph"}  
								class = "windGustWidget"
							/>
						</div>
						
						{/* Cloudiness in % */}
						<div class={ style.smallWidget }>
							<Widget 
								factor = "Cloudiness" 
								measure = {this.state.currentWeatherData['clouds']['all'] + "%"} 
								class = "cloudinessWidget"
							/>
						</div>
	
						{/* Visibility in Meters. Max value is 10km, converted to miles */}
						<div class={ style.smallWidget }>
							<Widget 
								factor = "Visibility" 
								measure = {this.state.currentWeatherData['visibility']/1000/1.6 + "mi"} 
								class = "visibilityWidget"
							/>
						</div>
	
						{/* Sunrise time in UTC, converted to local time */}
						<div class={ style.smallWidget }>
							<Widget 
								factor = "Sunrise" 
								measure = {this.unixToLocalTime(this.state.currentWeatherData['sys']['sunrise'], this.state.currentWeatherData['timezone'])} 
								class = "sunriseWidget"
							/>
						</div>
	
						{/* Sunset time in UTC, converted to local time */}
						<div class={ style.smallWidget }>
							<Widget 
								factor = "Sunset" 
								measure = {this.unixToLocalTime(this.state.currentWeatherData['sys']['sunset'], this.state.currentWeatherData['timezone'])} 
								class = "sunsetWidget"
							/>
						</div>

						{/* generates the widget for the next 5 hours by passing thorught the JSON file*/}
						<div class={style.wideWidget}>
							<HWidget
								data = {this.state.hourlyWeatherData}
							/>
						</div>
						{/* generates the widget for the next 5 days by passing thorught the JSON file*/}
						<div class={style.wideWidget}>
							<Dwidget
								data = {this.state.dailyWeatherData}
								date = {this.state.hourlyWeatherData['list'][0]['dt_txt'].split(' ')[0]}
							/>
						</div>
						
					</div>
				<footer class={style.bottombar}>
					{/* Currently a placeholder for the search widget, it should have the same dimensions and look */}
					<SearchWidget setLocation = {this.setLocation}/>
				</footer>
				</div>
			);
		}
	}

	// Run on the state of the component updating. This is a lifecycle method, documentation is on Preact
	componentDidUpdate(prevProps, prevState, snapshot){
		if(prevState.location != this.state.location){
			// console.log("Location Updated")
			this.fetchAllData()
		}
	}

	// Has to be an arrow function in order to reference this properly
		// https://sebhastian.com/this-setstate-is-not-a-function/
	setLocation = (newLocation) => {
		this.setState({ location: newLocation })
	}






	// For convenience
	fetchAllData = () =>{
		this.fetchWeatherData(),
		this.fetchHourlyData(),
		this.fetchDailyData();
	}


	// a call to fetch weather data via openweathermap
	fetchWeatherData = () => {
		// Current Weather API URL
		var url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&units=metric&APPID=289583d0a866674a2de29766196e460a`;
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseWeatherJSON, // Extracts data from JSON from API Call
			error : function(req, err){ console.log('API call failed ' + err); }
		})
	}

	// Stores the JSON file from the API Call into a state
	parseWeatherJSON = (parsed_json) => {
		this.setState({ currentWeatherData : parsed_json });
		// console.log(this.state) // Debugging  
	}

	// a call to fetch weather data for the forcasts of the next days via openweathermap
	fetchDailyData = () => { 
		// Hourly Weather API URL
		var url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.location}&units=metric&cnt=7&appid=289583d0a866674a2de29766196e460a`;
		$.ajax({
			type: 'GET',
			url: url,
			dataType: "jsonp",
			success : this.parseDailyJSON, // Extracts data from JSON from API Call
			error : function(req, err){ console.log('API call failed ' + err); }
		})
	}
	// Stores the JSON file from the API Call into a state
	parseDailyJSON = (Dailydata) => {
		// console.log(this.state) // Debug
		this.setState({dailyWeatherData : Dailydata})
		// console.log(this.state) // Debug
	}

	// a call to fetch weather data for the forcasts of the next hours via openweathermap
	fetchHourlyData = () => { 
		// Hourly Weather API URL
		var url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${this.state.location}&units=metric&cnt=24&appid=289583d0a866674a2de29766196e460a`;
		$.ajax({
			type: 'GET',
			url: url,
			dataType: "jsonp",
			success : this.parseHourlyJSON, // Extracts data from JSON from API Call
			error : function(req, err){ console.log('API call failed ' + err); }
		})
	}
	// Stores the JSON file from the API Call into a state
	parseHourlyJSON = (Hourlydata) => {
		// console.log(this.state) // Debug
		this.setState({hourlyWeatherData : Hourlydata})
		// console.log(this.state) // Debug
	}


	unixToLocalTime = (unixTimestamp, timezone_shift) =>{
		// Unix dates are in seconds but JS dates are in milliseconds so * 1000
		// There is no locale for .toLocaleString(locale, options) so it defaults to the hosts settings
		// Short timeStyle is (HH:MM). The timezone shift is the difference in seconds to GMT. 
			// Negative shifts are behind, positive infront
		return new Date((unixTimestamp + timezone_shift) * 1000).toLocaleString([], {timeStyle : "short"})
	}
}

