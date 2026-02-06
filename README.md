# Vue Portfolio

A modern, dynamic portfolio website built with Vue 3, TypeScript, and Vite, featuring interactive components, glass-morphism design, and a fully data-driven architecture.

## 🌐 Live Demo

- **Primary**: [AWS Amplify](https://main.d3ooa289kfgel8.amplifyapp.com)
- **GitHub Pages**: [elysableu.github.io/portfolio](https://elysableu.github.io/portfolio)

## 📸 Screenshots

### Home View
![Home Page](public/img/gifs/home-view-demo.gif)

### About View
![About Page](public/img/gifs/about-view-demo.gif)

### Projects View
![Projects Library](public/img/gifs/projects-view-demo.gif)

### Project Detail View
![Project Detail](public/img/gifs/project-detail-view-demo.gif)

### Blog View
Coming Soon! 📣

## 🌟 Features

### Core Functionality
- **Dynamic Component Rendering**: 35+ components rendered dynamically from JSON data
- **Featured Projects Ticker**: Auto-playing carousel showcasing portfolio projects
- **What's New & Coming Soon**: Interactive stacked card interface for updates and roadmap
- **Glass Morphism Design**: Modern UI with glassmorphism effects and smooth animations
- **Responsive Layout**: Full responsive design (in progress)
- **Type-Safe**: Built with TypeScript for robust code quality

### Key Components
- **Link Radial**: Interactive circular navigation menu
- **Project Showcase**: Dynamic project cards with detailed views
- **Skills Display**: Categorized skill listings with experience tracking
- **Experience Timeline**: Professional experience with rich details
- **Education Section**: Academic background and achievements

## 🛠️ Tech Stack

- **Framework**: Vue 3.5 (Composition API)
- **Language**: TypeScript 5.9
- **Build Tool**: Vite 7
- **Routing**: Vue Router 4.6
- **Styling**: CSS with CSS Variables
- **Data Management**: JSON-based content system
- **Code Quality**: ESLint, Oxlint, Prettier
- **Deployment**: 
  - GitHub Pages
  - AWS Amplify with custom domain (Route 53)

## 🚀 Getting Started

### Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

### Recommended Browser Setup

- **Chromium-based browsers** (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- **Firefox**:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

### Prerequisites
- Node.js (v20.19+ or v22.12+)
- npm or yarn

### Project Setup

1. **Clone the repository**
```bash
git clone https://github.com/elysableu/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

6. **Run linters**
```bash
npm run lint
```

7. **Format code**
```bash
npm run format
```

### Available Scripts

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Type-check and build for production
- `npm run preview` - Preview production build locally
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run all linters (Oxlint + ESLint)
- `npm run lint:oxlint` - Run Oxlint for correctness checks
- `npm run lint:eslint` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

### Customize Configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## 📁 Project Structure
```
portfolio/
├── public/
│   ├── data/              # JSON data files for content management
│   ├── documents/         # Downloadable documents (resume, etc.)
│   ├── img/               # Image assets organized by feature
│   └── posts/             # Blog post assets organized by date
├── src/
│   ├── components/        # Vue components organized by feature/page
│   ├── composables/       # Reusable composition functions
│   ├── router/            # Vue Router configuration
│   ├── services/          # Data fetching and API services
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Helper functions and utilities
│   ├── views/             # Top-level page components
│   └── assets/            # Styles and fonts
│       ├── fonts/
│       └── styles/
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 📊 Data Structure

The portfolio uses a JSON-based data system for easy content management. All data files are located in `/public/data/`:

- `personal.json` - Personal information and contact details
- `home.json` - Homepage content (greeting, headline, introduction)
- `projects.json` - Project portfolio with detailed information
- `experience.json` - Professional work experience
- `education.json` - Educational background
- `skills.json` - Technical skills categorized by type
- `about.json` - About section content
- `new_soon.json` - Recent updates and upcoming features

### Example Data Structure
```typescript
// projects.json
{
  "id": "project-01",
  "title": "Project Title",
  "tagline": "Brief description",
  "technologies": {
    "frontend": ["Vue", "TypeScript"],
    "backend": ["Node.js"],
    "database": ["MongoDB"]
  },
  "featured": true,
  "status": "completed"
}
```

## 🎨 Design System

### Color Palette

#### Primary Colors
```css
--color-primary:        <!-- Add your primary color hex -->
--color-secondary:      <!-- Add your secondary color hex -->
--color-accent-teal:    <!-- Add your teal accent hex -->
```

#### Background Colors
```css
--color-background:     <!-- Add your background color hex -->
--color-surface:        <!-- Add your surface color hex -->
```

#### Text Colors
```css
--color-text-primary:   <!-- Add your primary text color hex -->
--color-text-secondary: <!-- Add your secondary text color hex -->
```

#### UI Colors
```css
--color-border:         <!-- Add your border color hex -->
--color-hover:          <!-- Add your hover state color hex -->
```

### CSS Variables
The project uses CSS custom properties for consistent theming:
```css
--color-primary: Primary brand color
--color-secondary: Secondary accent color
--color-accent-teal: Accent color
--spacing-sm, --spacing-md, --spacing-lg: Spacing scale
--radius-sm, --radius-md, --radius-lg: Border radius scale
--shadow-md: Shadow elevation
```

### Glass Card Components
- `glass-card`: Standard glass effect
- `glass-card-dark`: Dark variant
- `glass-card-inner`: Subtle inner glass effect
- `glass-gradient-layered`: Gradient with layered effect

## 🔧 Key Features Implementation

### Stacked Card Interface
The "What's New & Coming Soon" section uses an innovative stacked card design:
- Active card displays full content
- Inactive cards show as collapsed previews
- Click to expand any card
- Smooth transitions and animations

### Dynamic Ticker
Auto-playing project carousel with:
- Configurable play/pause controls
- Previous/next navigation
- Hover effects
- Responsive image sizing

### Type-Safe Data Layer
All data is strongly typed using TypeScript interfaces:
- `Project`, `Experience`, `Education`, `Skill` types
- Union types for flexible component props
- Type guards for runtime type checking

## 📝 Adding New Content

### Adding a New Project

1. Add project data to `/public/data/projects.json`
2. Add project images to `/public/img/projects/`
3. The project will automatically appear in the portfolio

### Adding a New Skill

1. Update `/public/data/skills.json`
2. Add to appropriate category
3. Skills are automatically rendered

### Adding to What's New

1. Update `/public/data/new_soon.json` in the `"new"` array
2. Include: id, type, title, dateCompleted, and content (tagline, link, icon)

### Adding to Coming Soon

1. Update `/public/data/new_soon.json` in the `"soon"` array
2. Include: id, type, title, dateAdded, and content (tagline, link, status, icon)

## ⚠️ Known Issues

### Responsive Design
- **Window Resize Styling**: Currently experiencing layout and styling issues when the browser window is resized. Styles may not adapt properly to window dimension changes.
- **Status**: Work in progress - full responsive design implementation is ongoing
- **Workaround**: For best experience, refresh the page after resizing the browser window

## 🎯 Roadmap

- [ ] Full responsive design for mobile and tablet
- [ ] Fix window resize styling issues
- [ ] Headshot in link radial
- [ ] Blog with comparison-style posts
- [ ] Resume download functionality
- [ ] Embedded Figma/Miro boards in projects
- [ ] Project demo videos
- [ ] Comment system for blog posts
- [ ] Introduce Project Silverguild

## 🚢 Deployment

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

### AWS Amplify
Connected to GitHub repository with automatic deployments on push to main branch. Custom domain configured via Route 53.

**Live URL**: [main.d3ooa289kfgel8.amplifyapp.com](https://main.d3ooa289kfgel8.amplifyapp.com)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Elysa Ward**
- Portfolio: [main.d3ooa289kfgel8.amplifyapp.com](https://main.d3ooa289kfgel8.amplifyapp.com)
- GitHub: [@elysableu](https://github.com/elysableu)

## 🙏 Acknowledgments

- Vue.js team for the amazing framework
- Design inspiration from modern portfolio websites

---

**Note**: This portfolio is continuously being updated with new features and improvements. Check the "What's New & Coming Soon" section for the latest updates!