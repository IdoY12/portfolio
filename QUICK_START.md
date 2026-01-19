# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Customize Your Content
Edit `src/app/data/portfolio.data.ts` and update:
- Your name, title, and tagline
- Your technologies and proficiency levels
- Your projects with descriptions and links
- Your social media links

### Step 3: Run the Development Server
```bash
npm start
```

Open `http://localhost:4200` in your browser!

## 📝 Essential Customizations

### 1. Update Hero Section
```typescript
// In src/app/data/portfolio.data.ts
export const heroData: HeroData = {
  name: 'Your Name Here',
  title: 'Your Job Title',
  tagline: 'Your tagline',
  image: 'path/to/your/photo.jpg'
};
```

### 2. Add Your Technologies
```typescript
// In src/app/data/portfolio.data.ts
export const techStackData: TechStackItem[] = [
  { name: 'Angular', icon: 'angular', category: 'Frontend', proficiency: 90 },
  // Add your technologies...
];
```

### 3. Add Your Projects
```typescript
// In src/app/data/portfolio.data.ts
export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'My Project',
    description: 'Project description',
    image: 'assets/images/project.jpg',
    technologies: ['Angular', 'TypeScript'],
    links: {
      demo: 'https://demo-url.com',
      github: 'https://github.com/username/project'
    }
  }
];
```

### 4. Update Social Links
```typescript
// In src/app/data/portfolio.data.ts
export const socialLinksData: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github',
    label: 'Visit my GitHub'
  }
];
```

## 🎨 Customize Colors

Edit `src/styles.scss` and modify the CSS variables:
```scss
:root {
  --color-primary: #6366f1;  // Change to your preferred color
  --color-bg-primary: #0a0a0f;
  // ... more variables
}
```

## 📦 Build for Production

```bash
npm run build
```

Deploy the `dist/portfolio-website` folder to your hosting service.

## 📚 Full Documentation

See `README.md` for complete documentation and customization guide.
