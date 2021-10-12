import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
  isActive = false;
  constructor(public _router: Router) { }

  ngOnInit(): void {
  }
  
  active(event: Event) {
    this.isActive = true;
    this._router.navigate(['/home'], {queryParams: {}})
  }
}
