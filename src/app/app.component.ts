import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HeroComponent } from './components/hero/hero.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LinksComponent } from './components/links/links.component';

/**
 * Main App Component
 * Contains navigation, scroll-to-top button, and all section components
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    TechStackComponent,
    ProjectsComponent,
    LinksComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'scale(0.8)' })),
      transition(':enter', [
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  showScrollTop: boolean = false;
  isMenuOpen: boolean = false;
  
  // Navigation sections
  sections = [
    { id: 'hero', label: 'Home' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'links', label: 'Contact' }
  ];

  ngOnInit(): void {
    // Check initial scroll position
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Show scroll-to-top button after scrolling down 300px
    this.showScrollTop = window.scrollY > 300;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset for fixed navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    // Close mobile menu after navigation
    this.isMenuOpen = false;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
