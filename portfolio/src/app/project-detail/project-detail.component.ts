import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ArchitectureDiagramComponent } from '../architecture-diagram/architecture-diagram.component';

@Component({
  selector: 'app-project-detail',
  imports: [CommonModule, ArchitectureDiagramComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit {
  projectId: string = '';
  selectedPage: string = 'LandingPage';

  project: any = {};

  projects = {
    'eshoppingzone': {
      title: 'EShoppingZone',
      subtitle: 'Modern ECommerce Platform',
      description: 'EShoppingZone is a comprehensive full-stack e-commerce platform built with modern web technologies, featuring a FastAPI backend, Angular frontend, and administrative capabilities. The platform provides a complete online shopping experience with user authentication, product management, cart functionality, order processing, and payment integration.',
      role: 'Full Stack Developer',
      timeline: '2 Weeks',
      team: '1 developer',
      liveDemo: '#',
      github: '#',
      heroImage: 'assets/ECommerce/Landing.gif',
      techStack: [
        { name: 'Angular', iconUrl: 'https://img.icons8.com/color/120/angularjs.png' },
        { name: 'TypeScript', iconUrl: 'https://img.icons8.com/color/120/typescript.png' },
        { name: 'Tailwind', iconUrl: 'https://img.icons8.com/color/120/tailwindcss.png' },
        { name: 'FastAPI', iconUrl: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png' },
        { name: 'Python', iconUrl: 'https://img.icons8.com/color/120/python.png' },
        { name: 'PostgreSQL', iconUrl: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-postgre-sql-a-free-and-open-source-relational-database-management-system-logo-color-tal-revivo.png' },
        { name: 'Node.js', iconUrl: 'https://img.icons8.com/fluency/120/node-js.png' },
        { name: 'Git', iconUrl: 'https://img.icons8.com/color/120/git.png' }
      ],
      features: [
        { title: 'Product Management', description: 'Comprehensive catalog with categories and filters' },
        { title: 'Secure Payments', description: 'Multiple payment gateways with encryption' },
        { title: 'User Authentication', description: 'Secure login and registration system' },
        { title: 'Responsive Design', description: 'Optimized for all device sizes' }
      ],
      metrics: [
        { label: 'Largest Contentful Paint (LCP)', value: '1.75s' },
        { label: 'Cumulative Layout Shift (CLS)', value: '0.02' }
      ]
    },
    'anistream': {
      title: 'AniStream',
      subtitle: 'AI-Powered Anime Streaming Platform',
      description: 'Anime streaming website with AI recommendation system for personalized content discovery and seamless viewing experience.',
      role: 'Full Stack Developer & AI Integration',
      timeline: '10 months',
      team: '4 developers',
      liveDemo: '#',
      github: '#',
      techStack: [
        { name: 'React', icon: '⚛️' },
        { name: 'Python', icon: '🐍' },
        { name: 'TensorFlow', icon: '🧠' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'Node.js', icon: '🟢' }
      ],
      features: [
        { title: 'AI Recommendations', description: 'Machine learning powered content suggestions' },
        { title: 'Video Streaming', description: 'High-quality adaptive streaming technology' },
        { title: 'User Profiles', description: 'Personalized watchlists and preferences' },
        { title: 'Search & Discovery', description: 'Advanced search with filters and categories' }
      ],
      metrics: [
        { label: 'User Engagement', value: '+45%' },
        { label: 'Recommendation Accuracy', value: '87%' },
        { label: 'Streaming Quality', value: '4K/60fps' },
        { label: 'User Retention', value: '78%' }
      ]
    }
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.projectId = this.route.snapshot.params['id'] || 'eshoppingzone';
    this.project = (this.projects as any)[this.projectId] || this.projects['eshoppingzone'];
  }

  goBack() {
    this.router.navigate(['/']);
  }

  onPageChange(event: any) {
    this.selectedPage = event.target.value;
  }

  getDesktopImage(): string {
    return `assets/ECommerce/${this.selectedPage}.png`;
  }

  getMobileImage(): string {
    return `assets/${this.project.title}/${this.selectedPage}-mobile.png`;
  }
}