// Gallery data with Cloudinary image URLs
// Replace CLOUD_NAME with your Cloudinary cloud name
// Upload images to Cloudinary and use the public IDs here

export interface GalleryImage {
  id: string;
  publicId: string; // Cloudinary public ID
  caption?: string;
  width: number;
  height: number;
}

export interface Gallery {
  id: string;
  title: string;
  location: string;
  year: number;
  description?: string;
  coverImage: string; // Cloudinary public ID for cover
  images: GalleryImage[];
}

// Your Cloudinary cloud name - update this after signing up
export const CLOUDINARY_CLOUD_NAME = 'your-cloud-name';

// Helper to generate Cloudinary URLs
export function getCloudinaryUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: string;
  } = {}
): string {
  const { width, height, quality = 'auto', format = 'auto' } = options;

  const transforms: string[] = [];
  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  transforms.push(`q_${quality}`);
  transforms.push(`f_${format}`);

  const transformString = transforms.join(',');

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformString}/${publicId}`;
}

// Example galleries - replace with your actual data
export const galleries: Gallery[] = [
  {
    id: 'japan-2024',
    title: 'Streets of Tokyo',
    location: 'Tokyo, Japan',
    year: 2024,
    description: 'Urban photography exploring the vibrant streets and quiet corners of Tokyo.',
    coverImage: 'photography-portfolio/japan/cover',
    images: [
      { id: '1', publicId: 'photography-portfolio/japan/img-001', width: 1600, height: 1067 },
      { id: '2', publicId: 'photography-portfolio/japan/img-002', width: 1600, height: 1067 },
      { id: '3', publicId: 'photography-portfolio/japan/img-003', width: 1067, height: 1600 },
    ],
  },
  {
    id: 'iceland-2023',
    title: 'Nordic Landscapes',
    location: 'Iceland',
    year: 2023,
    description: 'Dramatic landscapes of volcanic terrain, glaciers, and the northern lights.',
    coverImage: 'photography-portfolio/iceland/cover',
    images: [
      { id: '1', publicId: 'photography-portfolio/iceland/img-001', width: 1600, height: 1067 },
      { id: '2', publicId: 'photography-portfolio/iceland/img-002', width: 1600, height: 1067 },
    ],
  },
  {
    id: 'california-2023',
    title: 'Pacific Coast',
    location: 'California, USA',
    year: 2023,
    description: 'Coastal views and golden hour moments along Highway 1.',
    coverImage: 'photography-portfolio/california/cover',
    images: [
      { id: '1', publicId: 'photography-portfolio/california/img-001', width: 1600, height: 1067 },
    ],
  },
];

export function getGalleryById(id: string): Gallery | undefined {
  return galleries.find((g) => g.id === id);
}
