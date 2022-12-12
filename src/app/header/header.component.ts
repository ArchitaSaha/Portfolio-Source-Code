import { Component, OnInit } from '@angular/core';
import { faBars, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { Output, EventEmitter } from '@angular/core';
// export var darkTheme: boolean = true;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hamburgerIcon = faBars;
  toggleDarkIcon = faMoon;
  toggleLightIcon = faSun;

  darkTheme = true;

  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleTheme()
  {
    // darkTheme = !darkTheme;
    this.darkTheme = !this.darkTheme;
    this.newItemEvent.emit(this.darkTheme);
    // alert('clicked');
  }
}
