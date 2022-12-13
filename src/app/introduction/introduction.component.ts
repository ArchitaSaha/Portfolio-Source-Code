import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit, AfterViewInit {
  @Input() darkTheme: boolean = true;

  @ViewChild("textElement")
  textElement!: ElementRef;
  @ViewChild("blinkElement")
  blinkElement!: ElementRef;

  @Input() wordArray: string[] = [
    "Archita", "Saha"
  ];

  blinkWidth = "1.5px";
  typingSpeedMilliseconds = 150;

  private i = 0;

  sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  async ngAfterViewInit(): Promise<void> {
    this.initVariables();
    this.typingEffect(this.textElement);
    await this.sleep(1000);
    this.i++;
    this.typingEffect(this.blinkElement);
  }

  private initVariables(): void {
    this.renderer.setStyle(this.textElement.nativeElement, "padding", "0.1em");
    this.renderer.setStyle(
      this.blinkElement.nativeElement,
      "border-right-width",
      this.blinkWidth
    );
  }
private typingEffect(el: any): void {
    const word = this.wordArray[this.i].split("");
    const loopTyping = () => {
      if (word.length > 0) {
        el.nativeElement.innerHTML += word.shift();
      }
      else {
        // this.deletingEffect();
        return;
      }
      setTimeout(loopTyping, this.typingSpeedMilliseconds);
    };
    loopTyping();
  }
}