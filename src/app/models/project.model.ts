/**
 * Project data model
 * CUSTOMIZE: Add your projects with all relevant information
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string; // Project image URL
  technologies: string[]; // Array of technology names
  links: {
    demo?: string; // Live demo URL
    github?: string; // GitHub repository URL
    website?: string; // Additional website URL
  };
}
