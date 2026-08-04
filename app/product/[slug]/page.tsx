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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Product Hero */}
        <ProductHero
          title={data.productTitle}
          description={data.productDescriptionHeading}
          bannerImages={data.bannerImages}
        />

        {/* Highlight Stats Bar */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs text-center card-hover-effect">
            <div className="text-3xl font-extrabold text-sky-600 mb-1">2 – 500</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mesh Count Range</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs text-center card-hover-effect">
            <div className="text-3xl font-extrabold text-slate-900 mb-1">SS316L</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">High Corrosion Resistant</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs text-center card-hover-effect">
            <div className="text-3xl font-extrabold text-sky-600 mb-1">50+</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Export Countries</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs text-center card-hover-effect">
            <div className="text-3xl font-extrabold text-emerald-600 mb-1">100%</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">ISO 9001 Inspected</div>
          </div>
        </section>

        {/* Product Overview */}
        <section id="overview" className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center space-x-3 mb-6">
            <span className="w-1.5 h-6 bg-sky-600 rounded-full"></span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Product Overview</h2>
          </div>
          <div
            className="prose max-w-none text-slate-700 leading-relaxed text-base space-y-4"
            dangerouslySetInnerHTML={{ __html: data.productDescription }}
          />
        </section>

        {/* Features */}
        <section id="features" className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center space-x-3 mb-2">
            <span className="w-1.5 h-6 bg-sky-600 rounded-full"></span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Key Performance Features</h2>
          </div>
          <p className="text-slate-500 text-sm mb-4">Engineered for extreme operating environments, acid filtration, and heavy screening.</p>
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
        <section id="applications" className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center space-x-3 mb-2">
            <span className="w-1.5 h-6 bg-sky-600 rounded-full"></span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Industrial Applications</h2>
          </div>
          <p className="text-slate-500 text-sm mb-6">Serving critical processing and filtration sectors globally.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 card-hover-effect">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center mb-3 text-lg">🧪</div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Chemical & Petrochemical</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Acid filtration, catalyst recovery, and chemical vapor separation screens.</p>
            </div>
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 card-hover-effect">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center mb-3 text-lg">⚙️</div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Industrial Liquid & Gas Filtration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">High precision liquid strainers, hydraulic oil filter elements, and gas diffusers.</p>
            </div>
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 card-hover-effect">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center mb-3 text-lg">💊</div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Pharmaceutical & Biotech</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Cleanroom sterile air filtration, sifting screens, and active ingredient separation.</p>
            </div>
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 card-hover-effect">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center mb-3 text-lg">🍲</div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Food & Beverage Processing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">FDA-compliant sifting mesh, juice straining, sugar refining, and edible oil filtration.</p>
            </div>
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 card-hover-effect">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center mb-3 text-lg">⛏️</div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Mining & Mineral Screening</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Heavy abrasive particle sizing, slurry vibrating screens, and ore washing mesh.</p>
            </div>
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 card-hover-effect">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center mb-3 text-lg">🏛️</div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Architectural & Security</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Security window screens, decorative facade mesh, and infill guardrail panels.</p>
            </div>
          </div>
        </section>

        {/* Specifications Matrix */}
        <section id="specifications" className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center space-x-3 mb-2">
            <span className="w-1.5 h-6 bg-sky-600 rounded-full"></span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Technical Specifications Matrix</h2>
          </div>
          <p className="text-slate-500 text-sm mb-6">Standard and custom manufacturing tolerances compliant with ASTM E2016 specifications.</p>

          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold uppercase tracking-wider text-xs">Parameter</th>
                  <th className="p-4 font-semibold uppercase tracking-wider text-xs">Standard Range / Specification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="table-row-hover">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/60 w-1/3">Material Alloys</td>
                  <td className="p-4 text-slate-700">SS304, SS304L, SS316, SS316L, SS321, Duplex 2205</td>
                </tr>
                <tr className="table-row-hover">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/60">Wire Diameter Range</td>
                  <td className="p-4 text-slate-700">0.03 mm – 5.0 mm (Custom gauge tolerances)</td>
                </tr>
                <tr className="table-row-hover">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/60">Mesh Count Range</td>
                  <td className="p-4 text-slate-700">2 Mesh to 500 Mesh (Coarse screening to micron filtration)</td>
                </tr>
                <tr className="table-row-hover">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/60">Weave Patterns</td>
                  <td className="p-4 text-slate-700">Plain Weave, Twill Weave, Plain Dutch, Reverse Dutch Weave</td>
                </tr>
                <tr className="table-row-hover">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/60">Standard Roll Widths</td>
                  <td className="p-4 text-slate-700">0.5 m, 1.0 m, 1.22 m, 1.5 m, 2.0 m (Up to 3.0 m custom)</td>
                </tr>
                <tr className="table-row-hover">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/60">Standard Roll Length</td>
                  <td className="p-4 text-slate-700">30 m standard (Custom cut lengths & disc filters available)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Why Choose Prime Industrial Metals */}
        <section className="bg-gradient-to-br from-slate-900 to-sky-950 text-white p-8 sm:p-10 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-2">Why Partner With Prime Industrial Metals?</h2>
          <p className="text-slate-300 text-sm mb-8">Direct manufacturer capabilities backed by global logistics support.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/60 border border-slate-700/60 p-5 rounded-xl backdrop-blur-sm">
              <div className="text-sky-400 font-bold text-lg mb-2">ISO Certified</div>
              <p className="text-slate-300 text-xs leading-relaxed">Full material test certificates (MTC) and quality reports with every shipment.</p>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/60 p-5 rounded-xl backdrop-blur-sm">
              <div className="text-sky-400 font-bold text-lg mb-2">Custom Fabrication</div>
              <p className="text-slate-300 text-xs leading-relaxed">Precision cut discs, cylinder filters, and custom mesh sizes engineered to order.</p>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/60 p-5 rounded-xl backdrop-blur-sm">
              <div className="text-sky-400 font-bold text-lg mb-2">Factory Direct Rates</div>
              <p className="text-slate-300 text-xs leading-relaxed">Competitive OEM bulk pricing with direct container loading capabilities.</p>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/60 p-5 rounded-xl backdrop-blur-sm">
              <div className="text-sky-400 font-bold text-lg mb-2">Global Shipping</div>
              <p className="text-slate-300 text-xs leading-relaxed">Fast air and sea freight export to North America, Europe, Asia & Middle East.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center space-x-3 mb-2">
            <span className="w-1.5 h-6 bg-sky-600 rounded-full"></span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
          </div>
          <p className="text-slate-500 text-sm mb-4">Everything you need to know about our wire mesh products and export ordering.</p>
          <FAQAccordion faq={data.FAQ} />
        </section>

        {/* Request Quote Contact Form */}
        <section id="contact" className="bg-white p-8 sm:p-10 rounded-2xl border border-sky-100 shadow-xl ring-1 ring-sky-500/10">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="bg-sky-100 text-sky-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
              Fast Response Guaranteed
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Request an Instant Factory Quote</h2>
            <p className="text-slate-600 text-sm mt-2">
              Submit your required mesh specifications, alloy grade, and quantity to receive a competitive quote within 24 hours.
            </p>
          </div>

          <form className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Your Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Work Email Address</label>
              <input
                type="email"
                placeholder="john@company.com"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Material Grade</label>
              <select className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all">
                <option>SS304 Stainless Steel</option>
                <option>SS316 Marine Grade</option>
                <option>SS316L Ultra-Low Carbon</option>
                <option>Custom Alloy / Monel</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Required Mesh Count / Size</label>
              <input
                type="text"
                placeholder="e.g. 50 Mesh, 1.0m x 30m Roll"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Project Details & Quantity</label>
              <textarea
                rows={4}
                placeholder="Describe your application, roll dimensions, or target delivery date..."
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-base shadow-lg hover:shadow-sky-500/25 transition-all cursor-pointer"
              >
                Send Request For Price Quote →
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
