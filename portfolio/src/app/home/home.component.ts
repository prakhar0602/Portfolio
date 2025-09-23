import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ServicesComponent } from '../services/services.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ServicesComponent, TechnologiesComponent, ProjectsComponent],
  template: `
    <app-hero></app-hero>
    <app-services></app-services>
    <app-technologies></app-technologies>
    <app-projects></app-projects>
  `
})
export class HomeComponent {}