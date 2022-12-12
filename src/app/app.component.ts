import { Component, HostListener } from '@angular/core';
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

	darkTheme = true;

	images = [
		{
			// imageSrc: 'https://github.com/ArchitaSaha/Portfolio/blob/main/Associate%20Cloud%20Engineer.png?raw=true, https://github.com/ArchitaSaha/Portfolio/blob/main/Associate%20Cloud%20Engineer.png?raw=true 0.25x, https://github.com/ArchitaSaha/Portfolio/blob/main/Associate%20Cloud%20Engineer.png?raw=true 0.5x',
			imageSrc: 'https://github.com/ArchitaSaha/Portfolio/blob/main/Associate%20Cloud%20Engineer.png?raw=true',
			imageAlt: ''
		},
		{
			imageSrc: 'https://github.com/ArchitaSaha/Portfolio/blob/main/AWS%20Fundamentals%201.jpeg?raw=true',
			imageAlt: ''
		},
		{
			imageSrc: 'https://github.com/ArchitaSaha/Portfolio/blob/main/AWS%20Fundamentals%202.jpeg?raw=true',
			imageAlt: ''
		},
		{
			imageSrc: 'https://github.com/ArchitaSaha/Portfolio/blob/main/Programming%20in%20Java.jpg?raw=true',
			imageAlt: ''
		},
		{
			imageSrc: 'https://github.com/ArchitaSaha/Portfolio/blob/main/Core%20Java%20Training%20-%20Certificate%20of%20Excellence.jpg?raw=true',
			imageAlt: ''
		}
	];

	cards = [
		{
			imageSrc: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
			imageAlt: 'Portfolio Image',
			projectTitle: 'Portfolio',
			aboutProject: 'A clean and simple portfolio template for developers',
			skills: ['Angular', 'CSS', 'TypeScript'],
			codeLink:  'https://github.com/ArchitaSaha',
			previewLink: 'https://github.com/ArchitaSaha'
		},
		{
			imageSrc: 'https://i.ibb.co/9Z4mJZp/image-2022-07-26-201920536.png',
			imageAlt: 'Pension Management System Image',
			projectTitle: 'Pension Management System',
			aboutProject: 'Application to calculate pension based on various factors',
			skills: ['Spring', 'Angular'],
			codeLink:  'https://github.com/ArchitaSaha',
			previewLink: 'https://github.com/ArchitaSaha'
		},
		{
			imageSrc: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
			imageAlt: '',
			projectTitle: 'Handwriting Analysis for the assessment of Parkinson\'s Disease',
			aboutProject: 'Developed an ANN model to predict whether subject has Parkinson\'s disease',
			skills: ['Digital Image Processing', 'Pattern Recognition', 'Python'],
			codeLink:  'https://github.com/ArchitaSaha',
			previewLink: 'https://github.com/ArchitaSaha'
		},
		{
			imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNVVvK5ZVf-mcb5NoM_Koh1f3Nfh8H2qGOA&usqp=CAU',
			imageAlt: '',
			projectTitle: 'TSP implementation using Simulated Annealing Algorithm',
			aboutProject: 'Implemented Travelling Salesman Problem',
			skills: ['Simulated Annealing Algorithm', 'Java'],
			codeLink:  'https://github.com/ArchitaSaha',
			previewLink: 'https://github.com/ArchitaSaha'
		}
	];

	toggleTheme(theme: boolean) {
		this.darkTheme = theme;
	}
}