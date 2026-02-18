import PageHeader from "@/components/PageHeader";

export default function Equipo() {
  return (
    <>
      <PageHeader title="Equipo" subtitle="Las personas que hacen posible este proyecto" />
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Presidente */}
        <div className="bg-gradient-to-br from-primary-800 to-primary-900 text-white rounded-2xl p-8 md:p-12 mb-12 text-center">
          <div className="w-32 h-32 bg-gold-500/20 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-5xl">👤</span>
          </div>
          <p className="text-gold-400 text-sm uppercase tracking-widest mb-2">Presidente y Fundador</p>
          <h2 className="text-3xl font-bold mb-4">Julián Pérez Gutiérrez</h2>
          <p className="text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Fundador del proyecto Salud Naturista DECOYÍN y de la Iglesia de la Filosofía del Espíritu (IFE). 
            Autor del libro &ldquo;Paloma&rdquo; y compositor de más de 963 canciones terapéuticas Filo-Psico-Sóficas. 
            Organizador del Congreso Internacional (XV ediciones).
          </p>
        </div>

        {/* Equipo */}
        <h2 className="text-2xl font-bold text-primary-800 mb-8 text-center">Equipo de Trabajo</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {["Equipo de Formación", "Equipo de Comunicación", "Equipo de Voluntariado"].map((name) => (
            <div key={name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-spirit-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="font-bold text-primary-800 mb-2">{name}</h3>
              <p className="text-sm text-gray-600">Colaboradores dedicados al servicio del proyecto sin ánimo de lucro.</p>
            </div>
          ))}
        </div>

        <div className="bg-gold-50 rounded-xl p-8 text-center border border-gold-200">
          <h3 className="text-xl font-bold text-primary-800 mb-3">¿Quieres formar parte del equipo?</h3>
          <p className="text-gray-600 mb-4">Buscamos voluntarios comprometidos con la formación espiritual y el crecimiento interior.</p>
          <a href="/colaboracion" className="inline-block bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            Colabora con nosotros
          </a>
        </div>
      </div>
    </>
  );
}
