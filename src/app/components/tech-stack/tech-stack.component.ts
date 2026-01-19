import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { techStackData } from '../../data/portfolio.data';
import { TechStackItem } from '../../models/tech-stack.model';
import { CardComponent } from '../../shared/components/card/card.component';

/**
 * Tech Stack Section Component
 * Displays technologies organized by category with proficiency indicators
 * CUSTOMIZE: Update techStackData in portfolio.data.ts to change technologies
 */
@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss'],
  animations: [
    trigger('fadeInUp', [
      state('void', style({ opacity: 0, transform: 'translateY(15px)' })),
      transition(':enter', [
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class TechStackComponent implements OnInit {
  techStack: TechStackItem[] = techStackData;
  categories: string[] = [];
  selectedCategory: string = 'All';

  ngOnInit(): void {
    // Extract unique categories
    this.categories = ['All', ...Array.from(new Set(this.techStack.map(item => item.category)))];
  }

  get filteredTechStack(): TechStackItem[] {
    if (this.selectedCategory === 'All') {
      return this.techStack;
    }
    return this.techStack.filter(item => item.category === this.selectedCategory);
  }

  getTechStackByCategory(category: string): TechStackItem[] {
    return this.techStack.filter(item => item.category === category);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  getProficiencyClass(proficiency: number): string {
    if (proficiency >= 80) return 'expert';
    if (proficiency >= 60) return 'advanced';
    if (proficiency >= 40) return 'intermediate';
    return 'beginner';
  }

  getIconName(icon: string): string {
    // Map icon names to skillicons.dev format
    const iconMap: { [key: string]: string } = {
      'javascript': 'js',
      'typescript': 'ts',
      'react': 'react',
      'html5': 'html',
      'css3': 'css',
      'tailwind': 'tailwind',
      'pug': 'pug',
      'nodejs': 'nodejs',
      'express': 'express',
      'python': 'python',
      'flask': 'flask',
      'mysql': 'mysql',
      'postgresql': 'postgresql',
      'mongodb': 'mongodb',
      'docker': 'docker',
      'git': 'git',
      'linux': 'linux',
      'nginx': 'nginx',
      'aws': 'aws',
      'vite': 'vite',
      'npm': 'npm',
      'api': 'fastapi',
      'vscode': 'vscode',
      'postman': 'postman'
    };
    return iconMap[icon.toLowerCase()] || icon.toLowerCase();
  }

  handleImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    const fallback = target.nextElementSibling as HTMLElement;
    if (target && fallback) {
      target.style.display = 'none';
      fallback.style.display = 'flex';
    }
  }
}
