import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {
      icon: '💻',
      title: 'Full Stack Development',
      description: 'End-to-end web application development combining frontend and backend technologies for complete solutions.'
    },
    {
      icon: '🎨',
      title: 'Frontend Development',
      description: 'Creating responsive, interactive user interfaces with modern frameworks and cutting-edge design principles.'
    },
    {
      icon: '⚙️',
      title: 'Backend Development',
      description: 'Building robust server-side applications, APIs, and database architectures for scalable systems.'
    },
    {
      icon: '📱',
      title: 'Android App Development',
      description: 'Developing native Android applications with modern tools and best practices for optimal performance.'
    }
  ];
}
