"use client"

import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const stats = [
    { number: '10+', label: 'Tahun Pengalaman' },
    { number: '100+', label: 'Proyek Selesai' },
    { number: '95%', label: 'Kepuasan Klien' },
    { number: '50+', label: 'Tim Profesional' }
  ];

  return (
    <section id="tentang" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Tentang Kami</h2>

          {/* 2-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold text-gray-900">PT BILVA JAYA INTERINDO</span> adalah perusahaan jasa konstruksi dan kontraktor renovasi yang berdedikasi untuk memberikan solusi pembangunan terintegrasi.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Berkedudukan di Kabupaten Tangerang, Banten, kami hadir sebagai mitra terpercaya. Didukung oleh tim profesional di bawah kepemimpinan Bapak Diduk Setiawan, kami berkomitmen penuh terhadap standar mutu tinggi pada setiap proyek, dari perencanaan hingga penyelesaian.
              </p>
            </div>

            {/* Right Column - Image */}
            <div>
              <ImageWithFallback
                src="kami.jpg"
                alt="Professional construction team reviewing blueprints"
                className="w-full h-96 object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-[#c9972f] mb-2">
                {stat.number}
              </div>
              <div className="text-sm lg:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
