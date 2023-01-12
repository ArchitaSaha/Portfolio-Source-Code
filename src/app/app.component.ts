import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { faHackerrank, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp, faLocationDot, faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons';

// @HostListener("window:scroll", [])
// @HostListener('window:scroll', ['$event'])
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'portfolio';
	scrollIcon = faChevronUp;
	hackerrankIcon = faHackerrank;
	instagramIcon = faInstagram;
	locationIcon = faLocationDot;
	temperatureIcon = faTemperatureThreeQuarters;

	darkTheme = false;

	time: any;
	hours: any;
	msg: any;
	location: any;
	urlString: any;
	temperature: any;
	latitude: any;
	longitude: any;
	wcode: any;
	weather: any;

	weathercode = [
		{
			code: [0],
			desc: 'Clear sky'
		},
		{
			code: [1, 2, 3],
			desc: 'Mainly clear, partly cloudy, and overcast'
		},
		{
			code: [45, 48],
			desc: 'Fog and depositing rime fog'
		},
		{
			code: [51, 53, 55],
			desc: 'Drizzle: Light, moderate, and dense intensity'
		},
		{
			code: [56, 57],
			desc: 'Freezing Drizzle: Light and dense intensity'
		},
		{
			code: [61, 63, 65],
			desc: 'Rain: Slight, moderate and heavy intensity'
		},
		{
			code: [66, 67],
			desc: 'Freezing Rain: Light and heavy intensity'
		},
		{
			code: [71, 73, 75],
			desc: 'Snow fall: Slight, moderate, and heavy intensity'
		},
		{
			code: [77],
			desc: 'Snow grains'
		},
		{
			code: [80, 81, 82],
			desc: 'Rain showers: Slight, moderate, and violent'
		},
		{
			code: [85, 86],
			desc: 'Snow showers slight and heavy'
		},
		{
			code: [95],
			desc: 'Thunderstorm: Slight or moderate'
		},
		{
			code: [96, 99],
			desc: 'Thunderstorm with slight and heavy hail'
		},
	];

	images = [
		{
			// imageSrc: 'https://github.com/ArchitaSaha/Portfolio/blob/main/Associate%20Cloud%20Engineer.png?raw=true, https://github.com/ArchitaSaha/Portfolio/blob/main/Associate%20Cloud%20Engineer.png?raw=true 0.25x, https://github.com/ArchitaSaha/Portfolio/blob/main/Associate%20Cloud%20Engineer.png?raw=true 0.5x',
			imageSrc: 'assets/AssociateCloudEngineer.png',
			imageAlt: 'Associate Cloud Engineer'
		},
		{
			imageSrc: 'assets/AWSFundamentals1.jpeg',
			imageAlt: 'AWS Fundamentals : Going Cloud Native'
		},
		{
			imageSrc: 'assets/AWSFundamentals2.jpeg',
			imageAlt: 'AWS Fundamentals : Addressing Security Risk'
		},
		{
			imageSrc: 'assets/ProgrammingInJava.jpg',
			imageAlt: 'NPTEL : Programming In Java'
		},
		{
			imageSrc: 'assets/CoreJavaTraining-CertificateOfExcellence.jpg',
			imageAlt: 'Internshala : Core Java'
		}
	];

	constructor(@Inject(PLATFORM_ID) private platformId: Object, private renderer: Renderer2, private http: HttpClient) {
		setInterval(() => {
			this.time = new Date();
		}, 1000);

		this.decide();
	}

	ngAfterViewInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			let loader = this.renderer.selectRootElement('#loader');
			if (loader.style.display != "none") loader.style.display = "none"; //hide loader
			console.log("test view init")
		}
	}

	ngOnInit(): void {
		this.getData();
	}

	getWeatherDescription() {
		for(let temp of this.weathercode)
		{
			console.log(temp);
			// for(let t2 of temp.code)
			// {
			// 	console.log(t2);
			// }
			if(temp.code.includes(this.wcode))	return temp.desc;
		}
		return "";
	}

	async getData() {
		const res = await fetch(`http://ip-api.com/json/`);
		const json = await res.json();
		console.log(json);
		console.log(json.lat);
		this.latitude = json.lat;
		this.longitude = json.lon;
		
		this.location = json.regionName + ", " + json.country;

		this.urlString = "https://api.open-meteo.com/v1/forecast?latitude=" + this.latitude + "&longitude=" + this.longitude + "&current_weather=true&timezone=auto";

		const res2 = await fetch(this.urlString);
		const json2 = await res2.json();
		this.temperature = json2.current_weather.temperature;
		this.wcode = json2.current_weather.weathercode;
		this.weather = this.getWeatherDescription();
		console.log(this.wcode);

		// this.http.get(this.urlString).subscribe((res2:any)=>{
		// 	this.temperature = res2.current_weather.temperature;
		// 	this.wcode = res2.current_weather.weathercode;
		// 	// this.weather = this.weathercode.filter(this.getWeatherDescription);
		// 	console.log(this.wcode);
		// });
	}

	decide() {
		this.hours = new Date().getHours();
		console.log("this.hours",this.hours)
		if(this.hours < 6){
			this.msg = "Sweet Dreams";
			this.darkTheme = true;
		}
		else if(this.hours < 10){
			this.msg = "Good Morning";
			this.darkTheme = false;
		}
		else if(this.hours < 16){
			this.msg = "Good Afternoon";
			this.darkTheme = false;
		}
		else if(this.hours < 18){
			this.msg = "Good Evening";
			this.darkTheme = false;
		}
		else if(this.hours < 24){
			this.msg = "Good Night";
			this.darkTheme = true;
		}
	}

	toggleTheme(theme: boolean) {
		this.darkTheme = theme;
	}
}