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

## Image Hosting with Cloudinary

This portfolio uses [Cloudinary](https://cloudinary.com) for free image hosting with automatic optimization.

### Setup Cloudinary

1. Sign up for free at [cloudinary.com](https://cloudinary.com)
2. Get your **Cloud Name** from the dashboard
3. Update `CLOUDINARY_CLOUD_NAME` in `data/galleries.ts`

### Uploading Images

1. Go to **Media Library** in your Cloudinary dashboard
2. Create folders for organization (e.g., `photography-portfolio/japan/`)
3. Upload images - Cloudinary will provide the **public ID**
4. Use the public ID in your gallery data

### Adding a New Gallery

Edit `data/galleries.ts`:

```typescript
{
  id: 'my-gallery',           // URL slug
  title: 'Gallery Title',
  location: 'Location',
  year: 2024,
  coverImage: 'folder/cover', // Cloudinary public ID
  images: [
    { id: '1', publicId: 'folder/img-001', width: 1600, height: 1067 },
    // Add more images...
  ],
}
```

Then push to GitHub - the site will automatically rebuild and deploy.

### Cloudinary Free Tier

- 25GB storage
- 25GB bandwidth/month
- Automatic image optimization
- On-the-fly transformations
