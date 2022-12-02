import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit {

  WeatherData: any;
  constructor() { }

  ngOnInit() {
    this.WeatherData = {
      main: {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Monett&appid=35d921ceee2938885cf3b9e011abf195')
      .then(response => response.json())
      .then(data => { this.setWeatherData(data); })

    // let data = JSON.parse('{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}');
    // this.setWeatherData(data);
  }

  setWeatherData(data) {
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (((this.WeatherData.main.temp - 273.15) * 9 / 5) + 32).toFixed(0) + ' F';
    this.WeatherData.temp_min = (((this.WeatherData.main.temp_min - 273.15) * 9 / 5) + 32).toFixed(0) + ' F';
    this.WeatherData.temp_max = (((this.WeatherData.main.temp_max - 273.15) * 9 / 5) + 32).toFixed(0) + ' F';
    this.WeatherData.temp_feels_like = (((this.WeatherData.main.feels_like - 273.15) * 9 / 5) + 32).toFixed(0) + ' F';
  }

  feren() {
    console.log("Change to feren");
    this.WeatherData.temp_celcius = (((this.WeatherData.main.temp - 273.15) * 9 / 5) + 32).toFixed(0) + ' F';
    this.WeatherData.temp_min = (((this.WeatherData.main.temp_min - 273.15) * 9 / 5) + 32).toFixed(0) + ' F';
    this.WeatherData.temp_max = (((this.WeatherData.main.temp_max - 273.15) * 9 / 5) + 32).toFixed(0) + ' F';
    this.WeatherData.temp_feels_like = (((this.WeatherData.main.feels_like - 273.15) * 9 / 5) + 32).toFixed(0) + ' F';
  }
  celc() {
    console.log("celcius");
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0) + ' C';
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0) + ' C';
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0) + ' C';
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0) + ' C';

  }

  kelv() {
    console.log("kelvin");
    this.WeatherData.temp_celcius = this.WeatherData.main.temp.toFixed(0) + ' K';
    this.WeatherData.temp_min = this.WeatherData.main.temp_min.toFixed(0) + " K";
    this.WeatherData.temp_max =  this.WeatherData.main.temp_max + ' K';
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like).toFixed(0) + ' K';
  }

  weather() {
    if (this.WeatherData.id = 804) {
 console.log("clouds!")
    }
     }

}


