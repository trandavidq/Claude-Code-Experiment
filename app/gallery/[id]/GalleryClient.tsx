'use client';

import { useState } from 'react';
import Link from 'next/link';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Navigation from '@/app/components/Navigation';
import { Gallery, getCloudinaryUrl } from '@/data/galleries';

interface GalleryClientProps {
  gallery: Gallery | undefined;
}

export default function GalleryClient({ gallery }: GalleryClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!gallery) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-white dark:bg-black pt-32 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              Gallery not found
            </h1>
            <Link
              href="/"
              className="mt-4 inline-block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              &larr; Back to galleries
            </Link>
          </div>
        </main>
      </>
    );
  }

  const lightboxSlides = gallery.images.map((image) => ({
    src: getCloudinaryUrl(image.publicId, { width: 1920 }),
    width: image.width,
    height: image.height,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-black">
        {/* Header */}
        <section className="pt-32 pb-12 px-6">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/"
              className="inline-block text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8 transition-colors"
            >
              &larr; Back to galleries
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              {gallery.title}
            </h1>
            <p className="text-lg text-zinc-500">
              {gallery.location}, {gallery.year}
            </p>
            {gallery.description && (
              <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl">
                {gallery.description}
              </p>
            )}
          </div>
        </section>

        {/* Image Grid */}
        <section className="pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {gallery.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => openLightbox(index)}
                  className="aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 rounded-lg overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-zinc-500"
                >
                  <img
                    src={getCloudinaryUrl(image.publicId, { width: 600, height: 450 })}
                    alt={image.caption || `Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={lightboxSlides}
        />
      </main>
    </>
  );
}
