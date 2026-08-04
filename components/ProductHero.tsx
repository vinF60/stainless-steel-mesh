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
      <p className="mb-6 text-lg text-gray-700">{description}</p>
      <div className="flex gap-4 overflow-x-auto justify-center my-6">
        {bannerImages.map((img, idx) => {
          const altText = (img.original.title && !img.original.title.toLowerCase().startsWith('cropped'))
            ? img.original.title
            : `${title} SS304 SS316 Industrial Woven Wire Mesh Roll - Image ${idx + 1}`;
          return (
            <Image
              key={idx}
              src={img.original.data}
              alt={altText}
              width={720}
              height={480}
              className="rounded-lg object-cover shadow-md"
              priority={idx === 0}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductHero;
