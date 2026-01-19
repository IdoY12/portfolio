import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Reusable Card Component
 * Used for displaying content in a card format with hover effects
 */
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() hoverable: boolean = true;
  @Input() elevated: boolean = false;
  @Input() className: string = '';
}
