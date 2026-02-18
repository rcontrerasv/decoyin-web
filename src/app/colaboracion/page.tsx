import PageHeader from "@/components/PageHeader";

export default function Colaboracion() {
  return (
    <>
      <PageHeader title="Colaboración" subtitle="Apoya este proyecto sin ánimo de lucro" />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-spirit-50 rounded-xl p-8 mb-10 border-l-4 border-gold-500">
          <p className="text-lg text-gray-700 leading-relaxed">
            Salud Naturista DECOYÍN es un proyecto sin ánimo de lucro que se sostiene gracias a la colaboración desinteresada de personas comprometidas con la formación espiritual y el crecimiento interior. Hay muchas formas de colaborar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <span className="text-3xl mb-3 block">🤝</span>
            <h3 className="text-xl font-bold text-primary-800 mb-2">Voluntariado</h3>
            <p className="text-gray-600">Ofrece tu tiempo y habilidades al servicio del proyecto. Todo tipo de ayuda es bienvenida.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <span className="text-3xl mb-3 block">📢</span>
            <h3 className="text-xl font-bold text-primary-800 mb-2">Difusión</h3>
            <p className="text-gray-600">Comparte nuestro trabajo en tus redes sociales y con personas que puedan beneficiarse.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <span className="text-3xl mb-3 block">💛</span>
            <h3 className="text-xl font-bold text-primary-800 mb-2">Donación</h3>
            <p className="text-gray-600">Cualquier aportación ayuda a mantener y expandir los programas formativos del proyecto.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <span className="text-3xl mb-3 block">🎬</span>
            <h3 className="text-xl font-bold text-primary-800 mb-2">Contenido</h3>
            <p className="text-gray-600">Colabora creando o difundiendo vídeos, artículos y material formativo.</p>
          </div>
        </div>

        {/* Video platforms */}
        <div className="bg-gray-50 rounded-xl p-8 mb-10">
          <h3 className="text-xl font-bold text-primary-800 mb-4 text-center">Nuestros Canales de Vídeo</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <a href="#" className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow block">
              <span className="text-3xl block mb-2">▶️</span>
              <span className="font-semibold text-primary-800">YouTube</span>
              <p className="text-sm text-gray-500">Canal oficial con más de 1.000 vídeos</p>
            </a>
            <a href="#" className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow block">
              <span className="text-3xl block mb-2">🎥</span>
              <span className="font-semibold text-primary-800">Odysee</span>
              <p className="text-sm text-gray-500">Canal alternativo de vídeos del proyecto</p>
            </a>
          </div>
        </div>

        {/* Contact form */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-primary-800 mb-6 text-center">Quiero Colaborar</h3>
          <form className="space-y-4 max-w-lg mx-auto">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Tu email" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">¿Cómo quieres colaborar?</label>
              <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Cuéntanos cómo te gustaría colaborar..."></textarea>
            </div>
            <button type="submit" className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-lg font-semibold transition-colors">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
