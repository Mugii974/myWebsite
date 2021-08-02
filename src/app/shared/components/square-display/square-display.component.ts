import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square-display',
  templateUrl: './square-display.component.html',
  styleUrls: ['./square-display.component.scss']
})
export class SquareDisplayComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  hover: boolean;
  constructor() { }

  ngOnInit(): void {
    this.title  = "Présentation";
    this.description  = "Ici Il y aura la description du bloc";
    this.hover = false;
  }

}
