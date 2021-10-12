import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faUsers, faBatteryThreeQuarters, faWifi } from '@fortawesome/free-solid-svg-icons';
import { menuPaths } from './home.config';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { fader, slider, stepper, transformer } from '../home-animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    // fader,
    slider,
    // transformer,
    // stepper
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  faUsers = faUsers;
  faBatteryThreeQuarters = faBatteryThreeQuarters;
  faWifi = faWifi;
  public now: string;
  public firstTime = true;
  public menus = menuPaths;
  constructor(outlet: RouterOutlet) { }

  ngOnInit(): void {
    // this.playAudio();
    setInterval(() => {
      this.now = new Date().toString().split(' ')[4];
    }, 1);
  }
  ngAfterViewInit(): void {
    setTimeout(function() {
      this.firstTime = false;
    }, 500);
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/tokyo.mp3";
    audio.load();
    audio.play();
  }

}
