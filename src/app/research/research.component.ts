import { Component, Input, OnInit } from '@angular/core';
import { faCode, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  codeIcon = faCode;
  extLinkIcon = faExternalLinkAlt;

  @Input() darkTheme: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
