import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faCode, faMobile, faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  leftRoles = [
    'Software Engineer',
    'Full Stack Developer'
  ];

  rightRoles = [
    'Database Engineer',
    'Android App Development'
  ];



  socialLinks = [
    { icon: 'instagram', url: '#', label: 'Instagram' },
    { icon: 'linkedin', url: '#', label: 'LinkedIn' },
    { icon: 'behance', url: '#', label: 'Behance' }
  ];

  faUser = faUser;
  faCode = faCode;
  faMobile = faMobile;
  faDatabase = faDatabase;
}