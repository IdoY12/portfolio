import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

/**
 * Scroll Animation Directive
 * Uses Intersection Observer to add fade-in animation when elements enter viewport
 * Apply this directive to elements you want to animate on scroll
 */
@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // Create Intersection Observer
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            // Unobserve after animation to improve performance
            this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element enters viewport
      }
    );

    // Add initial class for styling
    this.el.nativeElement.classList.add('scroll-animate');
    
    // Start observing
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
