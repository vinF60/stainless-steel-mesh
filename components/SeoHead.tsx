"use client";
import React from 'react';
import Head from 'next/head';

interface SeoHeadProps {
  data: any;
  params: { slug: string };
}

export default function SeoHead({ data, params }: SeoHeadProps) {
  const siteUrl = 'https://stainless-steel-mesh-one.vercel.app';
  
  // Format slug cleanly for canonical and schema URLs
  const cleanSlug = params.slug
    ? params.slug.endsWith('.html')
      ? params.slug
      : `${params.slug}.html`
    : 'stainless-steel-wire-mesh-1888.html';
    
  const finalPageUrl = `${siteUrl}/product/${cleanSlug}`;

  // Concise Product schema description (250-400 characters)
  const rawDescription = data.productDescription?.replace(/<[^>]+>/g, '') || '';
  const conciseProductDescription = rawDescription.length > 350
    ? `${rawDescription.slice(0, 350).trim()}...`
    : rawDescription;

  // Product schema
  const productLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.productTitle,
    description: conciseProductDescription,
    image: data.bannerImages?.map((img: any) => img.original.data),
    sku: data._id,
    brand: {
      '@type': 'Brand',
      name: 'Prime Industrial Metals',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: finalPageUrl,
    },
    additionalProperty: data.productDetails?.map((detail: any) => ({
      '@type': 'PropertyValue',
      name: detail.productTitle,
      value: detail.subProductDescription,
    })),
  };

  // FAQPage schema
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.FAQ?.map((faq: any) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // BreadcrumbList schema
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${siteUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: `${siteUrl}/product`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.productTitle,
        item: finalPageUrl,
      },
    ],
  };

  // Organization schema
  const organizationLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Prime Industrial Metals',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
  };

  // WebSite schema
  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Prime Industrial Metals',
    url: siteUrl,
  };

  // WebPage schema
  const webpageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': finalPageUrl,
    url: finalPageUrl,
    name: data.head.metaTitle,
    description: data.head.metaDescription,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Prime Industrial Metals',
      url: siteUrl,
    },
  };

  // ImageObject schema
  const firstImage = data.bannerImages?.[0]?.original?.data;
  const imageLd = firstImage
    ? {
        '@context': 'https://schema.org',
        '@type': 'ImageObject',
        contentUrl: firstImage,
        url: firstImage,
        name: data.productTitle,
        caption: `${data.productTitle} SS304 SS316 Woven Wire Mesh Roll`,
      }
    : null;

  return (
    <>
      <Head>
        <title>{data.head.metaTitle}</title>
        <meta name="description" content={data.head.metaDescription} />
        <meta name="keywords" content={data.head.metaKeywords} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={finalPageUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={data.head.metaTitle} />
        <meta property="og:description" content={data.head.metaDescription} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={finalPageUrl} />
        {firstImage && <meta property="og:image" content={firstImage} />}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@primeindustrial" />
        <meta name="twitter:creator" content="@primeindustrial" />
        <meta name="twitter:title" content={data.head.metaTitle} />
        <meta name="twitter:description" content={data.head.metaDescription} />
        <meta name="twitter:url" content={finalPageUrl} />
        {firstImage && <meta name="twitter:image" content={firstImage} />}
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageLd) }} />
      {imageLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageLd) }} />
      )}
    </>
  );
}
