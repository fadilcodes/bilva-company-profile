"use client"

export function Clients() {
  const clients = [
    { name: 'Shopee', logo: <img src="/client/shopee.png" alt="Shopee" /> },
    { name: 'Summarecon Mall', logo: <img src="/client/summarecon-mall.png" alt="Summarecon Mall" /> },
    { name: 'Grab', logo: <img src="/client/grab.png" alt="Grab" /> },
    { name: 'Solo Paragon', logo: <img src="/client/solo-paragon.jpeg" alt="solo-paragon" /> },
    { name: 'Mulia Group', logo: <img src="/client/mulia-group.jpeg" alt="Mulia Group" /> },
    { name: 'Sopo del', logo: <img src="/client/sopo-del.jpeg" alt="Sopo del" /> },
    { name: 'Jogja Walk', logo: <img src="/client/jogja-walk.jpeg" alt="Jogja Walk" /> },
    { name: 'First Jakarta Internasional', logo: <img src="/client/first-jakarta-internasional.jpeg" alt="First Jakarta Internasional" /> },
  ];

  return (
    <section id="portofolio" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Klien & Mitra Kerja</h2>
          <p className="text-lg text-gray-600">
            Dipercaya oleh perusahaan terkemuka di Indonesia
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-3  transition-all duration-300">
                  <span className="text-2xl font-bold  group-hover:text-white transition-all duration-300">
                    {client.logo}
                  </span>
                </div>
                <p className="text-sm text-gray-700 font-medium">{client.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
