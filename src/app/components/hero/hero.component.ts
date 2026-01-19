import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { heroData } from '../../data/portfolio.data';
import { HeroData } from '../../models/hero.model';

/**
 * Hero Section Component
 * Modern hero with typing animation and animated gradient background
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('fadeInUp', [
      state('void', style({ opacity: 0, transform: 'translateY(30px)' })),
      transition(':enter', [
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('1000ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('typing', [
      transition('* => *', [
        animate('0.05s')
      ])
    ])
  ]
})
export class HeroComponent implements OnInit, OnDestroy {
  heroData: HeroData = heroData;
  displayedText: string = '';
  fullText: string = '';
  private typingInterval?: any;
  private isTyping: boolean = false;

  ngOnInit(): void {
    this.fullText = this.heroData.tagline || '';
    // Small delay to ensure component is rendered
    setTimeout(() => {
      this.startTyping();
    }, 500);
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  startTyping(): void {
    if (this.isTyping) return;
    this.isTyping = true;
    this.displayedText = '';
    let index = 0;

    this.typingInterval = setInterval(() => {
      if (index < this.fullText.length) {
        this.displayedText += this.fullText.charAt(index);
        index++;
      } else {
        clearInterval(this.typingInterval);
        this.isTyping = false;
      }
    }, 50); // Typing speed
  }

  scrollToNext(): void {
    const techStackSection = document.getElementById('tech-stack');
    if (techStackSection) {
      techStackSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
