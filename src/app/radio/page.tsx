import PageHeader from "@/components/PageHeader";

export default function Radio() {
  return (
    <>
      <PageHeader title="Radio" subtitle="La radio del proyecto Salud Naturista DECOYÍN" />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-spirit-50 rounded-xl p-8 mb-10 border-l-4 border-gold-500">
          <p className="text-lg text-gray-700 leading-relaxed">
            La Radio de Salud Naturista DECOYÍN es un espacio de difusión de contenidos espirituales, filosóficos y formativos. A través de ella se emiten programas dedicados al crecimiento interior, la salud integral y la filosofía del espíritu.
          </p>
        </div>

        {/* Placeholder for radio player */}
        <div className="bg-gradient-to-br from-primary-800 to-primary-900 text-white rounded-2xl p-12 text-center mb-10">
          <span className="text-6xl block mb-6">📻</span>
          <h2 className="text-2xl font-bold mb-4">Radio DECOYÍN</h2>
          <p className="text-blue-200 mb-6">Escucha nuestros programas de formación espiritual y filosófica</p>
          <div className="bg-white/10 rounded-xl p-6 max-w-md mx-auto">
            <p className="text-sm text-blue-200">El reproductor de radio se integrará próximamente. Contacta con nosotros para acceder a los contenidos.</p>
          </div>
        </div>

        <div className="bg-gold-50 rounded-xl p-8 text-center border border-gold-200">
          <h3 className="text-xl font-bold text-primary-800 mb-3">¿Quieres escuchar nuestros programas?</h3>
          <p className="text-gray-600 mb-4">Contacta con nosotros para más información sobre la programación.</p>
          <a href="mailto:Info@saludnaturista.es" className="inline-block bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            Contactar
          </a>
        </div>
      </div>
    </>
  );
}
