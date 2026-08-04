"use client";
import React from 'react';
import Head from 'next/head';

interface SeoHeadProps {
  data: any;
  params: { slug: string };
}

export default function SeoHead({ data, params }: SeoHeadProps) {
  const siteUrl = 'https://stainless-steel-mesh-5d4n0jldu-hoye3.vercel.app';
  const finalPageUrl = `${siteUrl}${params.slug ? '/' + params.slug : ''}`;

  // Product schema (without placeholder URL and price)
  const productLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.productTitle,
    description: data.productDescription.replace(/<[^>]+>/g, ''),
    image: data.bannerImages?.map((img: any) => img.original.data),
    sku: data._id,
    brand: {
      '@type': 'Brand',
      name: 'Stainless Steel Wire Mesh',
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
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
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
        item: siteUrl + '/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: siteUrl + '/products',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.productTitle,
        item: finalPageUrl,
      },
    ],
  };

  // Organization schema (basic)
  const organizationLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Prime Industrial Metals',
    url: siteUrl,
    logo: siteUrl + '/logo.png',
    // No fake contact details; add real if available.
  };

  // No websiteLd script needed

  // Update canonical and Open Graph URL usage
  return (
    <>
      <Head>
        <title>{data.head.metaTitle}</title>
        <meta name="description" content={data.head.metaDescription} />
        <meta name="keywords" content={data.head.metaKeywords} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={finalPageUrl} />
        {/* Open Graph */}
        <meta property="og:title" content={data.head.metaTitle} />
        <meta property="og:description" content={data.head.metaDescription} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={finalPageUrl} />
        {data.bannerImages?.[0]?.original?.data && (
          <meta property="og:image" content={data.bannerImages[0].original.data} />
        )}
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.head.metaTitle} />
        <meta name="twitter:description" content={data.head.metaDescription} />
        {data.bannerImages?.[0]?.original?.data && (
          <meta name="twitter:image" content={data.bannerImages[0].original.data} />
        )}
        {/* Optional Twitter fields */}
        <meta name="twitter:url" content={finalPageUrl} />
      </Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
    </>
  );
}
