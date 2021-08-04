import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-display',
  templateUrl: './round-display.component.html',
  styleUrls: ['./round-display.component.scss']
})
export class RoundDisplayComponent implements OnInit {
  @Input() label;
  @Input() path;
  constructor() { }

  ngOnInit(): void {
  }

}
