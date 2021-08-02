import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';

@NgModule({
  declarations: [HomeComponent, SkillsComponent, ExperiencesComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class HomeModule { }