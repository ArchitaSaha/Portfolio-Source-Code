import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-navtest',
  templateUrl: './navtest.component.html',
  styleUrls: ['./navtest.component.css']
})
export class NavtestComponent implements OnInit {
  	hamburgerIcon = faBars;
	toggleDarkIcon = faMoon;
	toggleLightIcon = faSun;

	// smallScreen = true;
	smallScreen = false;
	isShowing: boolean = false;

	// darkTheme = false;
	@Input() darkTheme: boolean = true;
	@Output() newItemEvent = new EventEmitter<boolean>();

	constructor() { }

	ngOnInit(): void {
	}

  	toggleTheme()
	{
		this.darkTheme = !this.darkTheme;
		this.newItemEvent.emit(this.darkTheme);
	}

	setHeight() {
		var obj: any = document.getElementById("element");
		console.log(this.smallScreen)
		this.smallScreen = !this.smallScreen;
		// (obj).style.height = "60vh";
		// if(this.smallScreen)	(obj).style.height = "60vh";
		if(this.smallScreen)	(obj).style.height = "410px";
		else
		{
			(obj).style.height = "0";
			(obj).style.marginBottom = "200px";
			// (obj).style.borderBottom = "0.2em solid salmon";
		}
	}
}