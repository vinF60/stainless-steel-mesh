import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';
import ProductHero from '@/components/ProductHero';
import FeatureList from '@/components/FeatureList';
import FAQAccordion from '@/components/FAQAccordion';
import SeoHead from '@/components/SeoHead';

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

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const dataPath = path.join(process.cwd(), 'data', 'product.json');
  const raw = fs.readFileSync(dataPath, 'utf-8');
  const { data } = JSON.parse(raw);

  return (
    <>
      {/* SEO Head with structured data */}
      <SeoHead data={data} params={{ slug }} />
      <main className="container">
        <ProductHero title={data.productTitle} description={data.productDescriptionHeading} bannerImages={data.bannerImages} />
        {/* Product Description */}
        <section className="mt-8" dangerouslySetInnerHTML={{ __html: data.productDescription }} />
        {/* Features */}
        <h2 className="mt-12 text-2xl font-semibold">Features</h2>
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
        {/* Applications */}
        <h2 className="mt-12 text-2xl font-semibold">Applications</h2>
        <section dangerouslySetInnerHTML={{ __html: data.productDescription.replace(/<[^>]*>/g, '') }} />
        {/* Specifications */}
        <h2 className="mt-12 text-2xl font-semibold">Specifications</h2>
        <table className="w-full border-collapse mt-4">
          <tbody>
            <tr className="border-t"><td className="p-2 font-medium">Material</td><td className="p-2">SS304, SS304L, SS316, SS316L</td></tr>
            <tr className="border-t"><td className="p-2 font-medium">Wire Diameter</td><td className="p-2">0.03 mm – 5 mm</td></tr>
            <tr className="border-t"><td className="p-2 font-medium">Mesh Size</td><td className="p-2">2 – 500</td></tr>
            <tr className="border-t"><td className="p-2 font-medium">Weave Types</td><td className="p-2">Plain, Twill, Dutch</td></tr>
            <tr className="border-t"><td className="p-2 font-medium">Roll Width</td><td className="p-2">0.5 – 2 m</td></tr>
            <tr className="border-t"><td className="p-2 font-medium">Standard Length</td><td className="p-2">30 m</td></tr>
          </tbody>
        </table>
        {/* FAQ */}
        <h2 className="mt-12 text-2xl font-semibold">Frequently Asked Questions</h2>
        <FAQAccordion faq={data.FAQ} />
      </main>
    </>
  );
}
