import { Component, Input } from '@angular/core';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  @Input() darkTheme: boolean = true;

  facebookIcon = faFacebook;
  instagramIcon = faInstagram;
  linkedInIcon = faLinkedin;
  githubIcon = faGithub;

  constructor() { }

  ngOnInit(): void {
  }
}
