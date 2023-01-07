import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { faHackerrank, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

// @HostListener("window:scroll", [])
// @HostListener('window:scroll', ['$event'])
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'portfolio';
	scrollIcon = faChevronUp;
	hackerrankIcon = faHackerrank;
	instagramIcon = faInstagram;

	darkTheme = true;

	images = [
		{
			// imageSrc: 'https://github.com/ArchitaSaha/Portfolio/blob/main/Associate%20Cloud%20Engineer.png?raw=true, https://github.com/ArchitaSaha/Portfolio/blob/main/Associate%20Cloud%20Engineer.png?raw=true 0.25x, https://github.com/ArchitaSaha/Portfolio/blob/main/Associate%20Cloud%20Engineer.png?raw=true 0.5x',
			imageSrc: 'assets/AssociateCloudEngineer.png',
			imageAlt: 'Associate Cloud Engineer'
		},
		{
			imageSrc: 'assets/AWSFundamentals1.jpeg',
			imageAlt: 'AWS Fundamentals : Going Cloud Native'
		},
		{
			imageSrc: 'assets/AWSFundamentals2.jpeg',
			imageAlt: 'AWS Fundamentals : Addressing Security Risk'
		},
		{
			imageSrc: 'assets/ProgrammingInJava.jpg',
			imageAlt: 'NPTEL : Programming In Java'
		},
		{
			imageSrc: 'assets/CoreJavaTraining-CertificateOfExcellence.jpg',
			imageAlt: 'Internshala : Core Java'
		}
	];

	constructor(@Inject(PLATFORM_ID) private platformId: Object, private renderer: Renderer2) { }

	ngAfterViewInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			let loader = this.renderer.selectRootElement('#loader');
			if (loader.style.display != "none") loader.style.display = "none"; //hide loader
			console.log("test view init")
		}
	}

	toggleTheme(theme: boolean) {
		this.darkTheme = theme;
	}
}