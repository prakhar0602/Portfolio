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
      title: 'EShoppingZone',
      description: 'ECommerce Website with modern design, secure payment integration, and comprehensive product management system.',
      link: '/project/eshoppingzone',
      platforms: [
        { class: 'web-icon', logoClass: 'web-logo' },
        { class: 'android-icon', logoClass: 'android-logo' }
      ]
    },
    {
      title: 'AniStream',
      description: 'Anime Streaming Website with AI Recommendation system for personalized content discovery and seamless viewing experience.',
      link: '/project/anistream',
      platforms: [
        { class: 'web-icon', logoClass: 'web-logo' },
        { class: 'apple-icon', logoClass: 'apple-logo' }
      ]
    }
  ];
}