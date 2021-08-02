import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencesComponent } from './experiences/experiences.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent,
    children: [
        {    
           path: 'skills', component: SkillsComponent
        },
        {    
           path: 'experiences', component: ExperiencesComponent
        } 
    ]},
//   { path: 'skills', component: SkillsComponent }
//   { path: 'portfolio', component: PortfolioComponent ,
//     children: [
//       { path: '', component: PresentationComponent },
//       { path: 'presentation', component: PresentationComponent },
//       { path: 'parcours', component: ParcoursComponent },
//       { path: 'experiences', component: ExperienceComponent },
//       { path: 'skills', component: SkillsComponent },
//       { path: 'hobbies', component: HobbiesComponent },
//     ]  
//   }
];

@NgModule({
  imports: [
    // On doit utiliser un forChild ici, le forRoot étant déjà utilisé
    RouterModule.forChild(appRoutes)
  ]
})
export class HomeRoutingModule {}