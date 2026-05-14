"use client"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">Bilva Jaya Interindo</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#tentang" className="text-gray-700 hover:text-[#c9972f] transition-colors">
              Tentang Kami
            </a>
            <a href="#layanan" className="text-gray-700 hover:text-[#c9972f] transition-colors">
              Layanan
            </a>
            <a href="#portofolio" className="text-gray-700 hover:text-[#c9972f] transition-colors">
              Portofolio
            </a>
            <a href="#kontak" className="text-gray-700 hover:text-[#c9972f] transition-colors">
              Kontak
            </a>
          </nav>

          {/* CTA Button */}
          <button className="bg-[#c9972f] text-white px-6 py-3 rounded-full hover:bg-[#b38629] transition-all duration-300 shadow-md hover:shadow-lg">
            Hubungi Kami
          </button>
        </div>
      </div>
    </header>
  );
}
