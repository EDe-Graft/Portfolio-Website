# Edward De-Graft Quansah - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Computer Science student and Software Engineer specializing in full-stack development, AI/ML, and cloud-native applications.

## Live Demo

Visit the live site: [edgquansah.com](https://edgquansah.com)

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Fast Performance**: Built with Vite for lightning-fast load times
- **Accessible**: Follows web accessibility best practices
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility

## Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Linting**: ESLint with TypeScript support

## Project Structure

```
client/
├── public/           # Static assets (favicon, etc.)
├── src/
│   ├── assets/      # Images and media files
│   ├── components/  # Reusable React components
│   │   ├── navigation.tsx
│   │   └── social-links.tsx
│   ├── pages/       # Page components
│   │   ├── HomePage.tsx
│   │   ├── ExperiencePage.tsx
│   │   ├── ProjectsPage.tsx
│   │   └── SkillsPage.tsx
│   ├── App.tsx      # Main app component
│   ├── main.tsx     # Entry point
│   └── index.css    # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── postcss.config.js
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ede-graft/portfolio-website.git
cd portfolio-website/client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Pages

- **Home** (`/`) - Introduction and overview
- **Experience** (`/experience`) - Professional work history
- **Projects** (`/projects`) - Portfolio of notable projects
- **Skills** (`/skills`) - Technical skills and expertise

## Key Components

### Navigation
- Desktop: Fixed sidebar navigation with social links
- Mobile: Top navigation bar with responsive menu

### Social Links
- GitHub: [github.com/ede-graft](https://github.com/ede-graft)
- LinkedIn: [linkedin.com/in/de-graft](https://linkedin.com/in/de-graft)
- Email: edgquansah@gmail.com

## Deployment

The site is automatically deployed to Vercel on every push to the main branch.

To deploy manually:

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting platform of choice.

## Configuration

### Tailwind CSS v4

This project uses Tailwind CSS v4 with the new CSS-first configuration approach. The configuration is in:
- `postcss.config.js` - PostCSS configuration
- `src/index.css` - Tailwind import and custom styles

### TypeScript

TypeScript configuration is split into:
- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - App-specific settings
- `tsconfig.node.json` - Node-specific settings (for Vite config)

## Contact

Edward De-Graft Quansah
- Email: edgquansah@gmail.com
- LinkedIn: [linkedin.com/in/de-graft](https://linkedin.com/in/de-graft)
- GitHub: [github.com/ede-graft](https://github.com/ede-graft)
- Website: [edgquansah.com](https://edgquansah.com)

## License

This project is open source and available under the MIT License.
