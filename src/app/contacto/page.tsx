import PageHeader from "@/components/PageHeader";

export default function Contacto() {
  return (
    <>
      <PageHeader title="Contactos" subtitle="Estamos aquí para ayudarte" />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Información de Contacto</h2>
            <div className="space-y-4">
              <a href="mailto:Info@saludnaturista.es" className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-semibold text-primary-800">Email</p>
                  <p className="text-gray-600">Info@saludnaturista.es</p>
                </div>
              </a>
              <a href="https://wa.me/34608823542" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="font-semibold text-primary-800">WhatsApp</p>
                  <p className="text-gray-600">+34 608 823 542</p>
                </div>
              </a>
              <a href="tel:+34660384965" className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold text-primary-800">Teléfono</p>
                  <p className="text-gray-600">+34 660 384 965</p>
                </div>
              </a>
            </div>

            <h3 className="text-lg font-bold text-primary-800 mt-8 mb-4">Redes Sociales</h3>
            <div className="space-y-3">
              <a href="https://www.facebook.com/saludnaturista" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-primary-700 transition-colors">
                <span className="text-xl">📘</span> Facebook — Salud Naturista
              </a>
              <a href="https://x.com/JulinPrezGutir1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-primary-700 transition-colors">
                <span className="text-xl">🐦</span> X / Twitter — @JulinPrezGutir1
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Escríbenos</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
                <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Tu email" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Asunto del mensaje" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje *</label>
                <textarea rows={5} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Tu mensaje..."></textarea>
              </div>
              <button type="submit" className="w-full bg-primary-700 hover:bg-primary-800 text-white py-3 rounded-lg font-semibold transition-colors">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
