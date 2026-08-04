import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { Metadata } from 'next';
import ProductHero from '@/components/ProductHero';
import FeatureList from '@/components/FeatureList';
import FAQAccordion from '@/components/FAQAccordion';

// Load product data at build time (server side)
export const generateMetadata = async (): Promise<Metadata> => {
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

export default async function ProductPage() {
  const dataPath = path.join(process.cwd(), 'data', 'product.json');
  const raw = fs.readFileSync(dataPath, 'utf-8');
  const { data } = JSON.parse(raw);

  return (
    <main className="container">
      <ProductHero title={data.productTitle} description={data.productDescriptionHeading} bannerImages={data.bannerImages} />
      <section className="mt-8" dangerouslySetInnerHTML={{ __html: data.productDescription }} />
      <FeatureList features={[
        'Corrosion resistant',
        'High tensile strength',
        'Excellent durability',
        'Uniform mesh opening',
        'Heat resistant',
        'Custom sizes available',
      ]} />
      <FAQAccordion faq={data.FAQ} />
    </main>
  );
}
