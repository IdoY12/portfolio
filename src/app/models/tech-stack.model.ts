/**
 * Tech stack item data model
 * CUSTOMIZE: Add your technologies and proficiency levels
 */
export interface TechStackItem {
  name: string;
  icon: string; // Icon class name or image URL
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Database' | 'Tools' | 'Other';
  proficiency: number; // 0-100 percentage
}
