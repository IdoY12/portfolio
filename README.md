# Portfolio Website

A modern, responsive portfolio website showcasing technical skills, projects, and professional experience. Built with Angular, this single-page application provides an elegant presentation of my work and expertise.

## 🎯 Overview

This portfolio serves as a comprehensive showcase of my development capabilities, featuring:

- **Tech Stack Display** - Interactive visualization of technologies across Frontend, Backend, Database, DevOps, and Tools
- **Project Showcase** - Detailed presentations of key projects with technologies used
- **Professional Presentation** - Clean, modern design with smooth animations and responsive layout
- **Contact Integration** - Easy access to professional links and contact information

## 🚀 Features

- **Single-Page Application** - Smooth scrolling navigation with animated sections
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean interface with scroll animations and interactive elements
- **Tech Stack Visualization** - Categorized display of technologies with proficiency indicators
- **Project Gallery** - Showcase of projects with detailed descriptions and technology stacks

## 🛠️ Tech Stack

- **Framework**: Angular 18
- **Language**: TypeScript
- **Styling**: SCSS
- **Build Tool**: Angular CLI

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd linkdein
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:4200`

## 🏗️ Build

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, ready for deployment to any static hosting service.

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Feature components
│   │   ├── hero/           # Hero section
│   │   ├── tech-stack/     # Technology stack display
│   │   ├── projects/       # Projects showcase
│   │   └── links/          # Contact & social links
│   ├── data/               # Portfolio data configuration
│   ├── models/             # TypeScript interfaces
│   └── shared/             # Reusable components
└── assets/                 # Images and static assets
```

## 🎨 Customization

All portfolio content is centralized in `src/app/data/portfolio.data.ts`. Update this file to customize:

- Personal information and tagline
- Technology stack and proficiency levels
- Project details and descriptions
- Social links and contact information

## 📄 License

This project is private and intended for personal portfolio use.

---

**Built with ❤️ using Angular**
