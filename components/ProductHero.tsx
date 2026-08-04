import Image from 'next/image';
import React from 'react';

interface BannerImage {
  original: { data: string; title?: string };
  [key: string]: any;
}

interface ProductHeroProps {
  title: string;
  description: string;
  bannerImages: BannerImage[];
}

const ProductHero: React.FC<ProductHeroProps> = ({ title, description, bannerImages }) => {
  return (
    <section className="hero">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="mb-6 text-lg">{description}</p>
      <div className="flex gap-4 overflow-x-auto justify-center">
        {bannerImages.map((img, idx) => (
          <Image
            key={idx}
            src={img.original.data}
            alt={img.original.title ?? `Banner ${idx + 1}`}
            width={720}
            height={480}
            className="rounded-lg object-cover"
            priority={idx === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductHero;
