import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { projectsData } from '../../data/portfolio.data';
import { Project } from '../../models/project.model';
import { ButtonComponent } from '../../shared/components/button/button.component';

/**
 * Projects Section Component
 * Displays portfolio projects in a card-based layout
 * CUSTOMIZE: Update projectsData in portfolio.data.ts to change projects
 */
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fadeInUp', [
      state('void', style({ opacity: 0, transform: 'translateY(15px)' })),
      transition(':enter', [
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = projectsData;
  selectedTech: string = 'All';
  allTechnologies: string[] = [];
  isModalOpen: boolean = false;
  modalImageUrl: string = '';

  ngOnInit(): void {
    // Extract all unique technologies from projects
    const techSet = new Set<string>();
    this.projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    this.allTechnologies = ['All', ...Array.from(techSet).sort()];
  }

  get filteredProjects(): Project[] {
    if (this.selectedTech === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => 
      project.technologies.includes(this.selectedTech)
    );
  }

  selectTech(tech: string): void {
    this.selectedTech = tech;
  }

  openImageModal(imageUrl: string): void {
    this.modalImageUrl = imageUrl;
    this.isModalOpen = true;
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }

  closeImageModal(): void {
    this.isModalOpen = false;
    this.modalImageUrl = '';
    // Restore body scroll
    document.body.style.overflow = '';
  }
}
