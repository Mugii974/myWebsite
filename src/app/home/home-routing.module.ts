import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ParcoursComponent } from './components/parcours/parcours.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'portfolio', component: PortfolioComponent ,
    children: [
      { path: '', component: PresentationComponent },
      { path: 'presentation', component: PresentationComponent },
      { path: 'parcours', component: ParcoursComponent },
      { path: 'experiences', component: ExperienceComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'hobbies', component: HobbiesComponent },
    ]  
  }
];

@NgModule({
  imports: [
    // On doit utiliser un forChild ici, le forRoot étant déjà utilisé
    RouterModule.forChild(appRoutes)
  ]
})
export class HomeRoutingModule {}