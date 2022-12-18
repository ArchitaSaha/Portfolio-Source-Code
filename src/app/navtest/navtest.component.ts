import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navtest',
  templateUrl: './navtest.component.html',
  styleUrls: ['./navtest.component.css']
})
export class NavtestComponent implements OnInit {
  hamburgerIcon = faBars;
	toggleDarkIcon = faMoon;
	toggleLightIcon = faSun;

	darkTheme = true;
	smallScreen = true;
	isShowing: boolean = false;

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
		// (obj).style.height = "60vh";
		if(this.smallScreen)	(obj).style.height = "60vh";
		else					(obj).style.height = "0vh";
		this.smallScreen = !this.smallScreen;	
	}

}