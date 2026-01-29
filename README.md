# Portfolio Website

A simple and modern portfolio website built with React and Vite.

## Features

- Clean and modern design
- Responsive layout
- Smooth scrolling navigation
- Sections: Hero, About, Skills, Projects, Contact

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

- Update personal information in the component files:
  - `src/components/Hero.jsx` - Change name and title
  - `src/components/About.jsx` - Update about section
  - `src/components/Skills.jsx` - Modify skills list
  - `src/components/Projects.jsx` - Add your projects
  - `src/components/Contact.jsx` - Update contact links

- Modify colors in `src/index.css` by changing the CSS variables in `:root`

## Deployment

### Deploy to Vercel

1. **Push your code to GitHub** (if you haven't already):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Your site will be live in minutes!

3. **Automatic Deployments**:
   - Every push to your main branch will automatically deploy
   - You'll get a unique URL like: `your-portfolio.vercel.app`

### Alternative: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Technologies Used

- React 18
- Vite
- CSS3
