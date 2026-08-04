import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stainless Steel Wire Mesh Manufacturer & Exporter | SS304, SS316, SS316L",
  description: "Buy Premium Stainless Steel Wire Mesh in SS304, SS316 & SS316L grades. Manufacturer, supplier & exporter for industrial filtration and screening.",
  verification: {
    google: "iN-5WvmXb7lw51gwrwMCd8B_j9yCmUCU4i7aR4DxzCU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        {/* Top Announcement Bar */}
        <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 text-center border-b border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              ISO 9001:2015 Certified Manufacturer & Direct Exporter
            </span>
            <div className="flex items-center space-x-6 text-slate-400">
              <span>📧 sales@primeindustrialmetals.com</span>
              <span>📞 +1 (800) 555-MESH</span>
              <span className="hidden sm:inline text-emerald-400 font-semibold">✓ In-Stock Ready for Export</span>
            </div>
          </div>
        </div>

        {/* Sticky Header */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-sky-700 flex items-center justify-center text-white font-black text-xl shadow-md group-hover:scale-105 transition-transform">
                P
              </div>
              <div>
                <span className="text-lg font-extrabold tracking-tight text-slate-900 block leading-none">
                  PRIME INDUSTRIAL
                </span>
                <span className="text-xs font-bold tracking-wider text-sky-700 uppercase">
                  Metals & Wire Cloth
                </span>
              </div>
            </a>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8 font-semibold text-sm text-slate-700">
              <a href="#overview" className="hover:text-sky-600 transition-colors">Overview</a>
              <a href="#features" className="hover:text-sky-600 transition-colors">Features</a>
              <a href="#applications" className="hover:text-sky-600 transition-colors">Applications</a>
              <a href="#specifications" className="hover:text-sky-600 transition-colors">Specifications</a>
              <a href="#faq" className="hover:text-sky-600 transition-colors">FAQ</a>
            </nav>

            {/* Header CTA */}
            <div className="flex items-center space-x-3">
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              >
                Request Quote
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1">{children}</div>

        {/* Footer */}
        <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white font-bold">P</div>
                  <span className="text-lg font-bold text-white tracking-tight">PRIME INDUSTRIAL METALS</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                  Global manufacturer and stocking distributor of high-precision Stainless Steel Wire Mesh, Woven Wire Cloth, and Micron Filter Screens. ISO 9001 certified quality standards for demanding industrial applications worldwide.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">Material Grades</h4>
                <ul className="space-y-2 text-slate-400 text-xs">
                  <li>SS304 Stainless Steel Wire Mesh</li>
                  <li>SS304L Ultra-Low Carbon Mesh</li>
                  <li>SS316 Marine Grade Wire Cloth</li>
                  <li>SS316L High-Corrosion Resistant Mesh</li>
                  <li>Monel, Inconel & Titanium Mesh</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">Weave Styles</h4>
                <ul className="space-y-2 text-slate-400 text-xs">
                  <li>Plain Weave Wire Mesh</li>
                  <li>Twill Weave Wire Cloth</li>
                  <li>Plain Dutch Weave Filter Mesh</li>
                  <li>Reverse Dutch Weave Cloth</li>
                  <li>Custom Cut Disc & Screen Filters</li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-900 flex flex-wrap justify-between items-center text-xs text-slate-500 gap-4">
              <p>© {new Date().getFullYear()} Prime Industrial Metals. All rights reserved.</p>
              <div className="flex space-x-6">
                <span>ISO 9001:2015 Certified</span>
                <span>ASTM E2016 Compliant</span>
                <span>Worldwide Export Delivery</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
