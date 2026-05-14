"use client"

export function Clients() {
  const clients = [
    { name: 'Shopee', logo: 'S' },
    { name: 'Summarecon Mall', logo: 'SM' },
    { name: 'Grab', logo: 'G' },
    { name: 'Sahid', logo: 'SH' },
    { name: 'Mulia Group', logo: 'MG' }
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
                <div className="w-16 h-16 mx-auto bg-[#c9972f]/10 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-[#c9972f] transition-all duration-300">
                  <span className="text-2xl font-bold text-[#c9972f] group-hover:text-white transition-all duration-300">
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
