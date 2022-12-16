import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  @Input() darkTheme: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
