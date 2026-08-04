import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';
import ProductHero from '@/components/ProductHero';
import FeatureList from '@/components/FeatureList';
import FAQAccordion from '@/components/FAQAccordion';
import SeoHead from '@/components/SeoHead';

const SITE_URL = 'https://stainless-steel-mesh-one.vercel.app';

// Generate server-side metadata for Next.js App Router
export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
  const { slug } = await params;
  const dataPath = path.join(process.cwd(), 'data', 'product.json');
  const raw = fs.readFileSync(dataPath, 'utf-8');
  const { data } = JSON.parse(raw);
  const { metaTitle, metaDescription, metaKeywords } = data.head;
  
  const cleanSlug = slug
    ? slug.endsWith('.html')
      ? slug
      : `${slug}.html`
    : 'stainless-steel-wire-mesh-1888.html';
    
  const canonicalUrl = `${SITE_URL}/product/${cleanSlug}`;
  const firstImage = data.bannerImages?.[0]?.original?.data;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      type: 'website',
      images: firstImage ? [{ url: firstImage, alt: `${data.productTitle} SS304 SS316 Roll` }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      site: '@primeindustrial',
      creator: '@primeindustrial',
      images: firstImage ? [firstImage] : [],
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
      {/* Client SEO & JSON-LD Schemas */}
      <SeoHead data={data} params={{ slug }} />
      <main className="container max-w-5xl mx-auto px-4 py-8">
        <ProductHero
          title={data.productTitle}
          description={data.productDescriptionHeading}
          bannerImages={data.bannerImages}
        />

        {/* Overview */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Product Overview</h2>
          <div
            className="prose max-w-none text-slate-700 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: data.productDescription }}
          />
        </section>

        {/* Features */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Features</h2>
          <FeatureList
            features={[
              'Corrosion resistant in acidic and harsh chemical environments',
              'High tensile strength and high pressure durability',
              'Uniform mesh opening for precise micron filtration',
              'Heat resistant up to 800°C (SS304) and 870°C (SS316)',
              'Custom mesh sizes, wire diameters, and roll widths available',
              'ISO 9001 certified quality manufacturing standard',
            ]}
          />
        </section>

        {/* Applications */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Industrial Applications</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <li className="p-4 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-800 shadow-sm">
              Industrial Liquid & Gas Filtration
            </li>
            <li className="p-4 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-800 shadow-sm">
              Chemical & Petrochemical Processing
            </li>
            <li className="p-4 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-800 shadow-sm">
              Food Processing & Beverage Sifting
            </li>
            <li className="p-4 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-800 shadow-sm">
              Pharmaceutical & Biotech Manufacturing
            </li>
            <li className="p-4 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-800 shadow-sm">
              Mining, Aggregate & Particle Screening
            </li>
            <li className="p-4 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-800 shadow-sm">
              Architectural Security & Infill Guarding
            </li>
          </ul>
        </section>

        {/* Specifications */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Technical Specifications</h2>
          <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="p-3 font-semibold text-slate-800">Parameter</th>
                  <th className="p-3 font-semibold text-slate-800">Specification Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-3 font-medium bg-slate-50/50 w-1/3">Material Grades</td>
                  <td className="p-3">SS304, SS304L, SS316, SS316L Stainless Steel</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium bg-slate-50/50">Wire Diameter Range</td>
                  <td className="p-3">0.03 mm – 5.0 mm (Custom gauges available)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium bg-slate-50/50">Mesh Count Range</td>
                  <td className="p-3">2 Mesh to 500 Mesh (Micron rated)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium bg-slate-50/50">Weave Styles</td>
                  <td className="p-3">Plain Weave, Twill Weave, Dutch Weave, Reverse Dutch Weave</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium bg-slate-50/50">Standard Roll Widths</td>
                  <td className="p-3">0.5 m, 1.0 m, 1.2 m, 1.5 m, 2.0 m</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium bg-slate-50/50">Standard Roll Length</td>
                  <td className="p-3">30 m (Custom cut lengths supported)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Prime Industrial Metals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-1">ISO 9001 Quality Manufacturing</h3>
              <p className="text-sm text-slate-600">Strict quality controls and factory material test reports provided with every shipment.</p>
            </div>
            <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-1">Custom Fabrication</h3>
              <p className="text-sm text-slate-600">Tailored mesh sizes, cut disc filters, and customized roll dimensions for your machinery.</p>
            </div>
            <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-1">Competitive Direct Pricing</h3>
              <p className="text-sm text-slate-600">Factory-direct bulk rates and OEM production for worldwide export orders.</p>
            </div>
            <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-1">Fast Worldwide Shipping</h3>
              <p className="text-sm text-slate-600">Reliable logistics partners for prompt delivery across North America, Europe, Asia & Middle East.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <FAQAccordion faq={data.FAQ} />
        </section>
      </main>
    </>
  );
}
