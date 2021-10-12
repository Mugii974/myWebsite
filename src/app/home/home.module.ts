import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ShowingComponent } from './showing/showing.component';

@NgModule({
  declarations: [HomeComponent, SkillsComponent, ExperiencesComponent, ShowingComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    HomeRoutingModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class HomeModule { }