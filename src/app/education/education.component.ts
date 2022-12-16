import { Component, Input, OnInit } from '@angular/core';
import { faLocationDot, faTimeline } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() darkTheme: boolean = true;

  locationIcon = faLocationDot;
  timelineIcon = faTimeline;

  constructor() { }

  ngOnInit(): void {
  }

}
