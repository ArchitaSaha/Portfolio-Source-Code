import { Component, Input, OnInit } from '@angular/core';
import { faBookOpenReader, faBuildingColumns, faGraduationCap, faHourglassEnd, faLocationDot, faSchool } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() darkTheme: boolean = true;

  locationIcon = faLocationDot;
  timelineIcon = faHourglassEnd;
  graduationIcon = faGraduationCap;
  academyIcon = faBuildingColumns;
  schoolIcon = faSchool;
  marksIcon = faBookOpenReader;

  constructor() { }

  ngOnInit(): void {
  }

}
