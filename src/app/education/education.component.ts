import { Component, Input, OnInit } from '@angular/core';
import { faBuildingColumns, faClipboardList, faGraduationCap, faLocationDot, faPercent, faTimeline } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() darkTheme: boolean = true;

  locationIcon = faLocationDot;
  timelineIcon = faTimeline;
  graduationIcon = faGraduationCap;
  academyIcon = faBuildingColumns;

  constructor() { }

  ngOnInit(): void {
  }

}
