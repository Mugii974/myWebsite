import { Component, OnInit } from '@angular/core';
import { faUsers, faBatteryThreeQuarters, faWifi } from '@fortawesome/free-solid-svg-icons';
import { menuPaths } from './home.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faUsers = faUsers;
  faBatteryThreeQuarters = faBatteryThreeQuarters;
  faWifi = faWifi;
  public now: string;
  public menus = menuPaths;
  constructor() { }

  ngOnInit(): void {
    // this.playAudio();
    setInterval(() => {
      this.now = new Date().toString().split(' ')[4];
    }, 1);
  }

  // playAudio(){
  //   let audio = new Audio();
  //   audio.src = "../../../assets/audio/tokyo.mp3";
  //   audio.load();
  //   audio.play();
  // }

}
