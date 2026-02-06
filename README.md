# Photography Portfolio Website

A modern, static photography portfolio built with Next.js 16 and deployed to GitHub Pages for free hosting.

## Features

- 📸 Clean, minimal photography portfolio design
- 🎨 Dark mode support
- ⚡ Static site generation for fast loading
- 🆓 Free hosting on GitHub Pages
- 📱 Responsive design

## Local Development

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

Build the static site:

```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

## Deploying to GitHub Pages

This site automatically deploys to GitHub Pages via GitHub Actions on every push to the `main` branch.

### Setup Steps

1. Go to your GitHub repository settings
2. Navigate to **Pages** under **Code and automation**
3. Under **Source**, select **GitHub Actions**
4. Push to the `main` branch to trigger deployment
5. Your site will be available at `https://[username].github.io/photography-website`

The deployment workflow is configured in `.github/workflows/deploy.yml`.
