import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { socialLinksData, heroData } from '../../data/portfolio.data';
import { SocialLink } from '../../models/social-link.model';

/**
 * Links Section Component (Footer)
 * Displays social media links and contact information
 * CUSTOMIZE: Update socialLinksData in portfolio.data.ts to change links
 */
@Component({
  selector: 'app-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
  animations: [
    trigger('fadeInUp', [
      state('void', style({ opacity: 0, transform: 'translateY(15px)' })),
      transition(':enter', [
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class LinksComponent implements OnInit {
  socialLinks: SocialLink[] = socialLinksData;
  currentYear: number = new Date().getFullYear();
  portfolioName: string = heroData.name;

  ngOnInit(): void {
    // Component initialization
  }

  getIconClass(icon: string): string {
    return `icon-${icon}`;
  }

  getBadgeIcon(icon: string): string {
    const iconMap: { [key: string]: string } = {
      'github': '🐙',
      'linkedin': '💼',
      'email': '✉️',
      'phone': '📞'
    };
    return iconMap[icon.toLowerCase()] || '🔗';
  }
}
