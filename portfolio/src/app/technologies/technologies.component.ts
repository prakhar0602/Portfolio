import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-technologies',
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {
  constructor(private sanitizer: DomSanitizer) {}
  
  showAll = false;

  toggleShowAll() {
    this.showAll = !this.showAll;
  }

  get displayedTechnologies() {
    return this.showAll ? this.technologies : this.technologies.slice(0, 12);
  }

  technologies = [
    {
      name: 'Python',
      description: 'Programming language',
      iconUrl: 'https://img.icons8.com/color/120/python.png'
    },
    {
      name: 'Java',
      description: 'Programming language',
      iconUrl: 'https://img.icons8.com/color/120/java-coffee-cup-logo.png'
    },
    {
      name: 'C++',
      description: 'Programming language',
      iconUrl: 'https://img.icons8.com/color/120/c-plus-plus-logo.png'
    },
    {
      name: 'C#',
      description: 'Programming language',
      iconUrl: 'https://img.icons8.com/color/120/c-sharp-logo.png'
    },
    {
      name: 'HTML',
      description: 'Markup language',
      iconUrl: 'https://img.icons8.com/color/120/html-5.png'
    },
    {
      name: 'CSS',
      description: 'Styling language',
      iconUrl: 'https://img.icons8.com/color/120/css3.png'
    },
    {
      name: 'JavaScript',
      description: 'Programming language',
      iconUrl: 'https://img.icons8.com/color/120/javascript.png'
    },
    {
      name: 'React',
      description: 'Frontend library',
      iconUrl: 'https://img.icons8.com/color/120/react-native.png'
    },
    {
      name: 'MongoDB',
      description: 'NoSQL database',
      iconUrl: 'https://img.icons8.com/color/120/mongodb.png'
    },
    {
      name: 'Express.js',
      description: 'Web framework',
      iconUrl: 'https://www.manektech.com/storage/developer/1646733543.webp'
    },
    {
      name: 'Node.js',
      description: 'Runtime environment',
      iconUrl: 'https://img.icons8.com/fluency/120/node-js.png'
    },
    {
      name: '.NET',
      description: 'Framework',
      iconUrl: 'https://img.icons8.com/color/120/net-framework.png'
    },
    {
      name: 'Angular',
      description: 'Web framework',
      iconUrl: 'https://img.icons8.com/color/120/angularjs.png'
    },
    {
      name: 'TypeScript',
      description: 'Programming language',
      iconUrl: 'https://img.icons8.com/color/120/typescript.png'
    },
    {
      name: 'PostgreSQL',
      description: 'SQL database',
      iconUrl: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-postgre-sql-a-free-and-open-source-relational-database-management-system-logo-color-tal-revivo.png'
    },
    {
      name: 'MySQL',
      description: 'SQL database',
      iconUrl: 'https://img.icons8.com/color/480/mysql-logo.png'
    },
    {
      name: 'GitHub',
      description: 'Version control',
      iconUrl: 'https://img.icons8.com/ios-glyphs/480/github.png'
    }
  ];
}
