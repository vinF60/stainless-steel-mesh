import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';
import { NextSeo } from 'next-seo';
import ProductHero from '@/components/ProductHero';
import FeatureList from '@/components/FeatureList';
import FAQAccordion from '@/components/FAQAccordion';

// Generate metadata for each product page
export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  const dataPath = path.join(process.cwd(), 'data', 'product.json');
  const raw = fs.readFileSync(dataPath, 'utf-8');
  const { data } = JSON.parse(raw);
  const { metaTitle, metaDescription, metaKeywords } = data.head;
  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: data.bannerImages?.map((img: any) => ({ url: img.original.data })),
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
    },
  };
};

export default async function ProductPage({ params }: { params: { slug: string } }) {
  // Load product data (static for demo)
  const dataPath = path.join(process.cwd(), 'data', 'product.json');
  const raw = fs.readFileSync(dataPath, 'utf-8');
  const { data } = JSON.parse(raw);

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
      <NextSeo
        title={data.head.metaTitle}
        description={data.head.metaDescription}
        openGraph={{
          title: data.head.metaTitle,
          description: data.head.metaDescription,
          images: data.bannerImages?.map((img: any) => ({ url: img.original.data })),
        }}
        twitter={{
          cardType: 'summary_large_image',
          title: data.head.metaTitle,
          description: data.head.metaDescription,
        }}
        additionalMetaTags={[
          { name: 'keywords', content: data.head.metaKeywords },
          { name: 'robots', content: 'index, follow' },
          { property: 'og:type', content: 'product' },
          { property: 'og:url', content: `https://yourdomain.com/product/${params.slug}.html` },
        ]}
        canonical={`https://yourdomain.com/product/${params.slug}.html`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="container">
        <ProductHero title={data.productTitle} description={data.productDescriptionHeading} bannerImages={data.bannerImages} />
        <section className="mt-8" dangerouslySetInnerHTML={{ __html: data.productDescription }} />
        <FeatureList
          features={[
            'Corrosion resistant',
            'High tensile strength',
            'Excellent durability',
            'Uniform mesh opening',
            'Heat resistant',
            'Custom sizes available',
          ]}
        />
        <FAQAccordion faq={data.FAQ} />
      </main>
    </>
  );
}
