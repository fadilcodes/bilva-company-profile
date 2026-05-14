"use client"

import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Membangun Ruang, Mewujudkan Visi
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Solusi pembangunan terintegrasi untuk interior, manufaktur, dan MEP dengan kualitas presisi dan estetika.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#c9972f] text-white px-8 py-4 rounded-3xl hover:bg-[#b38629] transition-all duration-300 shadow-lg hover:shadow-xl">
                Layanan Kami
              </button>
              <button className="border-2 border-[#c9972f] text-[#c9972f] px-8 py-4 rounded-3xl hover:bg-[#c9972f] hover:text-white transition-all duration-300">
                Lihat Portofolio
              </button>
            </div>
          </div>

          {/* Right Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1770625296856-cb865be093da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Modern construction site"
                  className="w-full h-64 object-cover rounded-3xl shadow-lg"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1646987916641-1f3c8992daa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Luxury interior design"
                  className="w-full h-48 object-cover rounded-3xl shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Modern living room interior"
                  className="w-full h-48 object-cover rounded-3xl shadow-lg"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Building construction crane"
                  className="w-full h-64 object-cover rounded-3xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
