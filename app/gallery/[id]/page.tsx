import { galleries, getGalleryById } from '@/data/galleries';
import GalleryClient from './GalleryClient';

// Generate static params for all galleries at build time
export function generateStaticParams() {
  return galleries.map((gallery) => ({
    id: gallery.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function GalleryPage({ params }: PageProps) {
  const { id } = await params;
  const gallery = getGalleryById(id);

  return <GalleryClient gallery={gallery} />;
}
