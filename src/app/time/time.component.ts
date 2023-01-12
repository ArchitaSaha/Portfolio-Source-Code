import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-time',
	templateUrl: './time.component.html',
	styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
	@Input() darkTheme: boolean = true;

	time: any;
	hours: any;
	msg: any;
	location: any;
	url: String = "";

	constructor() {
		setInterval(() => {
			this.time = new Date();
		}, 1000);

		this.decide();
  	}

	ngOnInit(): void {
		this.getLocation();
	}

	getLocation() {
		if (!navigator.geolocation) {
			this.location = "Your browser doesn't support Geolocation";
			return;
		}

		const onSuccess = (position: any) => {
			console.log("custom -> " + position.coords.latitude + ", " + position.coords.longitude + ", " + position.coords.location);
			this.location = `Your location is (${position.coords.latitude},${position.coords.longitude})`;
		};
		
		const onError = (error: any) => {
			console.log("custom" + error);
			this.location = 'Failed to get your location!';
		};

		navigator.geolocation.getCurrentPosition(onSuccess, onError);
		console.log(this.location);
	}

	decide() {
		this.hours = new Date().getHours();
		console.log("this.hours",this.hours)
		if(this.hours < 10){
			this.msg = "Good Morning";
		}
		else if(this.hours < 16){
			this.msg = "Good Afternoon";
		}
		else if(this.hours < 19){
			this.msg = "Good Evening";
		}
		else if(this.hours < 24){
			this.msg = "Good Night";
		}
		else if(this.hours < 6){
			this.msg = "Sleep lah";
		}
	}

	firebaseSusbscribing(){
		
	}
}
