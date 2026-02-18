import PageHeader from "@/components/PageHeader";

export default function Canciones() {
  return (
    <>
      <PageHeader title="Canciones" subtitle="Más de 963 canciones Filo-Psico-Sóficas Terapéuticas para tu evolución" />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-spirit-50 rounded-xl p-8 mb-10 border-l-4 border-gold-500">
          <p className="text-lg text-gray-700 leading-relaxed">
            Las canciones de Salud Naturista DECOYÍN son composiciones Filo-Psico-Sóficas Terapéuticas creadas para tu evolución personal y espiritual. Con más de 963 canciones subidas a Internet y más de 1.000 vídeos, constituyen una herramienta única de formación y crecimiento interior.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-primary-800 text-white rounded-xl p-6 text-center">
            <span className="text-3xl font-bold block gradient-gold">963+</span>
            <span className="text-sm text-blue-200">Canciones</span>
          </div>
          <div className="bg-primary-800 text-white rounded-xl p-6 text-center">
            <span className="text-3xl font-bold block gradient-gold">1.000+</span>
            <span className="text-sm text-blue-200">Vídeos</span>
          </div>
          <div className="bg-primary-800 text-white rounded-xl p-6 text-center">
            <span className="text-3xl font-bold block gradient-gold">ONG</span>
            <span className="text-sm text-blue-200">Sin ánimo de lucro</span>
          </div>
        </div>

        {/* Video placeholder */}
        <h2 className="text-2xl font-bold text-primary-800 mb-6">Video-Canciones</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="bg-gray-100 rounded-xl overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <span className="text-4xl block mb-2">▶️</span>
                  <p className="text-sm">Vídeo-canción {n}</p>
                  <p className="text-xs mt-1">Embed de YouTube / Facebook</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-primary-800">Canción Filo-Psico-Sófica Terapéutica #{n}</h3>
                <p className="text-sm text-gray-500">Composición para tu evolución espiritual</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gold-50 rounded-xl p-8 text-center border border-gold-200">
          <h3 className="text-xl font-bold text-primary-800 mb-3">Tu canción Filo-Psico-Sófica Terapéutica para tu evolución</h3>
          <p className="text-gray-600 mb-4">Descubre todo el catálogo de canciones terapéuticas en nuestros canales de vídeo.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">▶️ YouTube</a>
            <a href="#" className="inline-block bg-primary-700 hover:bg-primary-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors">🎥 Odysee</a>
          </div>
        </div>
      </div>
    </>
  );
}
