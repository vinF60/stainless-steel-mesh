"use client";
import Image from 'next/image';
import React, { useState } from 'react';

interface BannerImage {
  original: { data: string; title?: string };
  [key: string]: any;
}

interface ProductHeroProps {
  title: string;
  description: string;
  bannerImages: BannerImage[];
}

const ProductHero: React.FC<ProductHeroProps> = ({ title, description, bannerImages }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeImage = bannerImages[selectedIdx] || bannerImages[0];

  const getAltText = (img: BannerImage, idx: number) => {
    return (img?.original?.title && !img.original.title.toLowerCase().startsWith('cropped'))
      ? img.original.title
      : `${title} SS304 SS316 Industrial Woven Wire Mesh Roll - Image ${idx + 1}`;
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden relative border border-slate-700/50 my-6">
      {/* Background Decorative Mesh Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Column: Hero Text & Information */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-400/30 px-3.5 py-1.5 rounded-full text-sky-300 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
            <span>Factory Direct Supplier & Stockist</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            {description}
          </p>

          {/* Quick Specs Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-md text-xs font-semibold text-slate-200">
              Grade: SS304 / SS316 / SS316L
            </span>
            <span className="bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-md text-xs font-semibold text-slate-200">
              Mesh Range: 2 to 500 Mesh
            </span>
            <span className="bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-md text-xs font-semibold text-slate-200">
              Weave: Plain, Twill, Dutch
            </span>
            <span className="bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-md text-xs font-semibold text-emerald-400">
              ✓ Ready Stock
            </span>
          </div>

          {/* Call To Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-lg hover:shadow-sky-500/30 transition-all flex items-center gap-2"
            >
              <span>📩 Request Instant Factory Quote</span>
            </a>
            <a
              href="#specifications"
              className="px-6 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all"
            >
              <span>View Full Specs Matrix ↓</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Image Gallery */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900/60 shadow-2xl group">
            {activeImage?.original?.data && (
              <Image
                src={activeImage.original.data}
                alt={getAltText(activeImage, selectedIdx)}
                width={700}
                height={500}
                className="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
            )}
            <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-slate-300 font-mono border border-slate-800">
              High Precision Industrial Roll
            </div>
          </div>

          {/* Thumbnails if multiple images exist */}
          {bannerImages.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-1">
              {bannerImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedIdx(idx)}
                  className={`relative rounded-lg overflow-hidden border-2 transition-all w-20 h-16 flex-shrink-0 ${
                    selectedIdx === idx ? 'border-sky-500 scale-105' : 'border-slate-700 opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img.original.data}
                    alt={getAltText(img, idx)}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
