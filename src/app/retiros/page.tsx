import PageHeader from "@/components/PageHeader";

export default function Retiros() {
  return (
    <>
      <PageHeader title="Retiros Espirituales" subtitle="Espacios de encuentro, reflexión y crecimiento interior" />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-spirit-50 rounded-xl p-8 mb-10 border-l-4 border-gold-500">
          <p className="text-lg text-gray-700 leading-relaxed">
            Los retiros espirituales de Salud Naturista DECOYÍN son espacios dedicados a la formación intensiva, la meditación, el encuentro con uno mismo y la convivencia con personas que comparten el mismo camino de crecimiento interior.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <span className="text-3xl mb-3 block">🏔️</span>
            <h3 className="text-xl font-bold text-primary-800 mb-2">Retiros de Formación</h3>
            <p className="text-gray-600">Jornadas intensivas de estudio y práctica espiritual en un entorno de paz y naturaleza.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <span className="text-3xl mb-3 block">🌿</span>
            <h3 className="text-xl font-bold text-primary-800 mb-2">Vacaciones Espirituales</h3>
            <p className="text-gray-600">Combina descanso y formación espiritual en un ambiente de armonía y crecimiento personal.</p>
          </div>
        </div>

        <div className="bg-gold-50 rounded-xl p-8 text-center border border-gold-200">
          <h3 className="text-xl font-bold text-primary-800 mb-3">Próximos Retiros</h3>
          <p className="text-gray-600 mb-4">Para conocer las fechas y detalles de los próximos retiros, ponte en contacto con nosotros.</p>
          <a href="mailto:Info@saludnaturista.es" className="inline-block bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            Consultar fechas
          </a>
        </div>
      </div>
    </>
  );
}
