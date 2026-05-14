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
              <a href="#layanan">
              <button className="bg-[#c9972f] text-white px-8 py-4 rounded-3xl hover:bg-[#b38629] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                Layanan Kami
              </button>
              </a>
              <a href="#portofolio">
              <button className="border-2 border-[#00a244] text-[#00a244] px-8 py-4 rounded-3xl hover:bg-[#14a24f] hover:text-white transition-all duration-300 cursor-pointer">
                Konsultasi via Whatsapp
              </button>
              </a>
            </div>
          </div>

          {/* Right Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ImageWithFallback
                  src="/proyek/meeting-room-1.jpeg"
                  alt="Modern construction site"
                  className="w-full h-64 object-cover rounded-3xl shadow-lg"
                />
                <ImageWithFallback
                  src="/proyek/work-space.jpeg"
                  alt="work-space"
                  className="w-full h-48 object-cover rounded-3xl shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <ImageWithFallback
                  src="/proyek/red-pipeline.jpeg"
                  alt="red-pipeline"
                  className="w-full h-48 object-cover rounded-3xl shadow-lg"
                />
                <ImageWithFallback
                  src="/proyek/rest-room.jpeg"
                  alt="rest-room"
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
