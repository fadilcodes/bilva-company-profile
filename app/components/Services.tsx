"use client"

import { Hammer, Palette, Settings } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Services() {
  const services = [
    {
      icon: Hammer,
      title: 'Contractor & Renovation',
      description: 'Layanan konstruksi komprehensif untuk bangunan komersial maupun residensial.',
      image: 'https://images.unsplash.com/photo-1770625296856-cb865be093da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
    },
    {
      icon: Palette,
      title: 'Interior Design & Build',
      description: 'Perancangan tata ruang fungsional sesuai kebutuhan spesifik klien.',
      image: 'https://images.unsplash.com/photo-1646987916641-1f3c8992daa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
    },
    {
      icon: Settings,
      title: 'MEP System',
      description: 'Instalasi mekanikal, kelistrikan, dan perpipaan berstandar tinggi.',
      image: 'https://images.unsplash.com/photo-1538474705339-e87de81450e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
    }
  ];

  const projectImages = [
    {
      src: '/proyek/meeting-room-1.jpeg',
      alt: 'Construction progress'
    },
    {
      src: '/proyek/work-space.jpeg',
      alt: 'Interior renovation'
    },
    {
      src: '/proyek/red-pipeline.jpeg',
      alt: 'MEP piping installation'
    },
    {
      src: '/proyek/pipeline.jpeg',
      alt: 'Finished interior space'
    },
    {
      src: '/proyek/rest-room.jpeg',
      alt: 'Building construction'
    },
    {
      src: '/proyek/front-room.jpeg',
      alt: 'Mechanical systems installation'
    }
  ];

  return (
    <section id="layanan" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Layanan Kami</h2>
          <p className="text-lg text-gray-600">
            Solusi terintegrasi untuk semua kebutuhan konstruksi dan interior Anda
          </p>
        </div>

        {/* Service Cards with Images */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 overflow-hidden"
              >
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-8">
                  <div className="w-16 h-16 bg-[#c9972f]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#c9972f] transition-all duration-300">
                    <Icon className="w-8 h-8 text-[#c9972f] group-hover:text-white transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Documentation Gallery */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Dokumentasi Proyek
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {projectImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-3xl shadow-lg group cursor-pointer"
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
