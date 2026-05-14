"use client"

import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="kontak" className="bg-gray-900 text-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Company Info */}
          <div className="space-y-6">
            <div>
              <img src="/logo-white.png" alt="Bilva Jaya Interindo Logo" className="w-100 mr-3" />
              <p className="text-gray-400 leading-relaxed">
                Membangun ruang berkualitas dengan presisi dan estetika untuk masa depan yang lebih baik. Perusahaan jasa konstruksi dan kontraktor renovasi yang berdedikasi untuk memberikan solusi pembangunan terintegrasi.
              </p>
            </div>
          </div>

          {/* Right Side - Contact Details */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold mb-4">Hubungi Kami</h4>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#c9972f]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#c9972f]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Telepon</p>
                  <a href="https://wa.me/6281285938973" target='blank' className="text-white hover:text-[#c9972f] transition-colors">
                    +62 812-8593-8973
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#c9972f]/20 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#c9972f]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a href="mailto:bilvajayainterindo08@gmail.com" className="text-white hover:text-[#c9972f] transition-colors break-all">
                    bilvajayainterindo08@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#c9972f]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#c9972f]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Alamat</p>
                  <p className="text-white">
                    Springhill Yume Lagoon. <br /> Blok B3 No 16 . Jl. Raya Cisauk Lapan, Suradita, Kec. Cisauk, Kabupaten Tangerang, Banten 15343
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; 2026 PT Bilva Jaya Interindo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
