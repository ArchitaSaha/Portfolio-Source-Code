import { Component, Input, OnInit } from '@angular/core';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

interface carouselImage {
	imageSrc: string;
	imageAlt: string;
}

@Component({
	selector: 'app-work',
	templateUrl: './work.component.html',
	styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
	@Input() darkTheme: boolean = true;
	@Input() images: carouselImage[] = [];
	@Input() indicators: boolean = true;
	@Input() autoSlide: boolean = false;
	@Input() slideInterval: number = 10000;

	rightIndicatorIcon = faChevronCircleRight;
	leftIndicatorIcon = faChevronCircleLeft;

	selectedIndex = 0;

	constructor() {
	}

	ngOnInit(): void {
		if(this.autoSlide) {
		this.autoSlideImages();
		}
	}

	selectImage(index: number): void {
		this.selectedIndex = index;
	}

	onPrevClick(): void {
		if(this.selectedIndex === 0) {
		this.selectedIndex = this.images.length - 1;
		}
		else {
		this.selectedIndex--;
		}
	}

	onNextClick(): void {
		if(this.selectedIndex === this.images.length - 1) {
		this.selectedIndex = 0;
		}
		else {
		this.selectedIndex++;
		}
	}

	autoSlideImages(): void {
		setInterval(() => {
		this.onNextClick();
		}, this.slideInterval);
	}
}