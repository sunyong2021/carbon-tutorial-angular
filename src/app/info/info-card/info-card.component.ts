import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit {
  @Input() heading:string
  @Input() content:string
  splitHeading:string[]

  constructor() {}

  ngOnInit() {
	this.splitHeading = this.createArrayFromPhrase(this.heading);
  }

  createArrayFromPhrase(phrase:string) {
    const splitPhrase = phrase.split(" ");
    const thirdWord = splitPhrase.pop();
    return [splitPhrase.join(" "), thirdWord];
  }
}
