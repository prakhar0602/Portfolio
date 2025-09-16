import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-Commerce App',
      description: 'Full-stack mobile application with payment integration, user authentication, and real-time inventory management.',
      link: '#',
      platforms: [
        { class: 'apple-icon', logoClass: 'apple-logo' },
        { class: 'android-icon', logoClass: 'android-logo' }
      ]
    },
    {
      title: 'Task Manager',
      description: 'Productivity app with team collaboration features, deadline tracking, and progress analytics.',
      link: '#',
      platforms: [
        { class: 'web-icon', logoClass: 'web-logo' },
        { class: 'android-icon', logoClass: 'android-logo' }
      ]
    },
    {
      title: 'Fitness Tracker',
      description: 'Health monitoring application with workout plans, nutrition tracking, and social features.',
      link: '#',
      platforms: [
        { class: 'apple-icon', logoClass: 'apple-logo' },
        { class: 'web-icon', logoClass: 'web-logo' }
      ]
    }
  ];
}