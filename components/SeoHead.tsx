"use client";
import React from 'react';

interface SeoHeadProps {
  data: any;
  params: { slug: string };
}

export default function SeoHead({ data, params }: SeoHeadProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": data.productTitle,
    "description": data.productDescription.replace(/<[^>]+>/g, ''),
    "image": data.bannerImages?.map((img: any) => img.original.data),
    "sku": data._id,
    "brand": {
      "@type": "Brand",
      "name": "Stainless Steel Wire Mesh",
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "0",
      "availability": "https://schema.org/InStock",
      "url": `https://yourdomain.com/product/${params.slug}.html`,
    },
    "faq": data.FAQ,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
