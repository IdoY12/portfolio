# Modern Portfolio Website

A beautiful, modern one-page portfolio website built with Angular, featuring smooth animations, responsive design, and a professional dark theme.

## 🚀 Features

- **Modern Design**: Clean, professional dark theme with gradient accents
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Fade-in animations on scroll and hover effects
- **Accessible**: Semantic HTML, ARIA labels, and keyboard navigation
- **Easy Customization**: All content is easily editable through TypeScript data files
- **Performance Optimized**: Lazy loading for images, optimized bundle size
- **Standalone Components**: Built with Angular standalone components (no NgModules)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn**
- **Angular CLI** (v18 or higher)

## 🛠️ Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd linkdein
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:4200` to see your portfolio

## 🎨 Customization Guide

### 1. Update Your Personal Information

Edit `src/app/data/portfolio.data.ts` to customize all your portfolio content:

#### Hero Section
```typescript
export const heroData: HeroData = {
  name: 'Your Name',                    // Your full name
  title: 'Full Stack Developer',        // Your job title/role
  tagline: 'Your tagline here',         // Short description
  image: 'path/to/your/photo.jpg'       // Your profile photo URL
};
```

#### Tech Stack
```typescript
export const techStackData: TechStackItem[] = [
  {
    name: 'Angular',
    icon: 'angular',                    // Icon identifier
    category: 'Frontend',               // Category: Frontend, Backend, DevOps, Database, Tools, Other
    proficiency: 90                     // 0-100 percentage
  },
  // Add more technologies...
];
```

#### Projects
```typescript
export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Project Name',
    description: 'Project description',
    image: 'path/to/project/image.jpg',
    technologies: ['Angular', 'TypeScript', 'Node.js'],
    links: {
      demo: 'https://your-demo-url.com',
      github: 'https://github.com/yourusername/project',
      website: 'https://optional-website.com'
    }
  },
  // Add more projects...
];
```

#### Social Links
```typescript
export const socialLinksData: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github',
    label: 'Visit my GitHub profile'
  },
  // Add more social links...
];
```

### 2. Customize Colors and Theme

Edit `src/styles.scss` to change the color scheme:

```scss
:root {
  // Primary Colors
  --color-primary: #6366f1;           // Main accent color
  --color-primary-dark: #4f46e5;
  --color-primary-light: #818cf8;
  
  // Background Colors
  --color-bg-primary: #0a0a0f;        // Main background
  --color-bg-secondary: #111118;       // Section backgrounds
  --color-bg-card: #1e1e2e;           // Card backgrounds
  
  // Text Colors
  --color-text-primary: #ffffff;       // Main text
  --color-text-secondary: #a0a0b0;    // Secondary text
  // ... more variables
}
```

### 3. Add Icons

The portfolio uses placeholder text for icons. To add actual icons:

1. **Option 1: Use an icon font library** (recommended)
   - Install a library like Font Awesome, Material Icons, or Heroicons
   - Update the icon placeholders in components to use the icon classes

2. **Option 2: Use SVG icons**
   - Place SVG files in `src/assets/icons/`
   - Update components to reference the SVG paths

3. **Option 3: Use image icons**
   - Place icon images in `src/assets/icons/`
   - Update components to use `<img>` tags with the icon paths

**Example for Font Awesome:**
```html
<!-- In tech-stack.component.html -->
<i class="fab fa-angular" aria-hidden="true"></i>
```

### 4. Update Project Images

1. Place your project images in `src/assets/images/`
2. Update the `image` property in `projectsData` to reference these images:
   ```typescript
   image: 'assets/images/project-1.jpg'
   ```

### 5. Customize Typography

Edit `src/index.html` to change fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update `src/styles.scss`:
```scss
--font-family-primary: 'YourFont', sans-serif;
```

### 6. Modify Section Content

Each section component can be customized:

- **Hero Component**: `src/app/components/hero/hero.component.html`
- **Tech Stack Component**: `src/app/components/tech-stack/tech-stack.component.html`
- **Projects Component**: `src/app/components/projects/projects.component.html`
- **Links Component**: `src/app/components/links/links.component.html`

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Main section components
│   │   ├── hero/
│   │   ├── tech-stack/
│   │   ├── projects/
│   │   └── links/
│   ├── shared/              # Reusable components
│   │   └── components/
│   │       ├── card/
│   │       └── button/
│   ├── models/              # TypeScript interfaces
│   ├── data/                # Portfolio data (CUSTOMIZE HERE)
│   │   └── portfolio.data.ts
│   ├── directives/          # Custom directives
│   └── app.component.ts     # Main app component
├── assets/                  # Static assets (images, icons, etc.)
├── styles.scss              # Global styles and CSS variables
└── index.html               # Main HTML file
```

## 🎯 Key Customization Points

All major customization points are marked with `CUSTOMIZE:` comments in the code:

1. **`src/app/data/portfolio.data.ts`** - All portfolio content
2. **`src/styles.scss`** - Colors, fonts, spacing (CSS variables)
3. **Component templates** - HTML structure and layout
4. **Component styles** - Section-specific styling

## 🚢 Building for Production

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **The build artifacts will be stored in `dist/portfolio-website/`**

3. **Deploy the `dist/portfolio-website` folder** to your hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3
   - Any static hosting service

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Proper heading hierarchy

## 🎨 Design Features

- **Dark Theme**: Modern dark color scheme with accent colors
- **Gradient Accents**: Beautiful gradients for primary elements
- **Smooth Animations**: Fade-in on scroll, hover effects
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Micro-interactions**: Subtle animations on hover and click

## 🔧 Development

### Running the Development Server

```bash
npm start
```

### Building for Production

```bash
npm run build
```

### Code Structure

- **Standalone Components**: All components are standalone (no NgModules)
- **TypeScript**: Strict type checking enabled
- **SCSS**: Modular styling with CSS variables
- **Animations**: Angular Animations API for smooth transitions

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements that could benefit others, pull requests are welcome!

## 📧 Support

For questions or issues, please open an issue on the repository or contact the maintainer.

---

**Built with ❤️ using Angular**
