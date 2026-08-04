"use client";
import React from 'react';
import Head from 'next/head';

interface SeoHeadProps {
  data: any;
  params: { slug: string };
}

export default function SeoHead({ data, params }: SeoHeadProps) {
  const siteUrl = 'https://stainless-steel-mesh-5d4n0jldu-hoye3.vercel.app';
  const pageUrl = `${siteUrl}/product/${params.slug}.html`;

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
      url: pageUrl,
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
        item: pageUrl,
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
    contactPoint: [{
      '@type': 'ContactPoint',
      telephone: '+1-800-123-4567',
      contactType: 'Customer Service',
    }],
  };

  // WebSite schema with SearchAction
  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <Head>
        <title>{data.head.metaTitle}</title>
        <meta name="description" content={data.head.metaDescription} />
        <meta name="keywords" content={data.head.metaKeywords} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={pageUrl} />
        {/* Open Graph */}
        <meta property="og:title" content={data.head.metaTitle} />
        <meta property="og:description" content={data.head.metaDescription} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={pageUrl} />
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
      </Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
    </>
  );
}
